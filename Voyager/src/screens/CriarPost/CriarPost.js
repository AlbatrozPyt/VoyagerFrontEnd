import { Shadow } from "react-native-shadow-2"
import { Container } from "../../components/container/style"
import { AddPicture, ContainerOtherImages, ImageDestaque, InputPost, OtherImages } from "./style"
import { MaterialIcons } from '@expo/vector-icons';

import { ButtonViagem, TextButtonViagem } from "../ViagemAtual/style";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { ShadowDefault } from "../../components/Shadow";

import * as MediaLibrary from "expo-media-library"
import * as ImagePicker from "expo-image-picker"
import { TitlePreviewFeed } from "../../components/PostFeed/style";
import { TitleViagens } from "../../components/ViewViagens/style";
import api from "../../service/Service";
import moment from "moment";
import { ModalInformativo } from "../../components/Modal";
import { MostrarModal } from "../../utils/MostrarModal";


export const CriarPost = ({ navigation, route }) => {

    const [image, setImage] = useState(null)
    const [lastImage, setLastImage] = useState(null)

    const [descricao, setDescricao] = useState("")
    const [titulo, setTitulo] = useState("")

    const [arrayImages, setArrayImages] = useState([])

    const [dep, setDep] = useState(false)

    const [mensagemModal, setMensagemModal] = useState("")
    const [showModalMensagem, setShowModalMensagem] = useState(false)

    const [loading, setLoading] = useState(false)

    async function pickerGalery() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri)
            setDep(dep ? false : true)
        }
    }

    async function pickerLatestImage() {
        const { assets } = await MediaLibrary.getAssetsAsync(
            { sortBy: [[MediaLibrary.SortBy.creationTime, false]], first: 1 }
        );

        if (assets.length > 0) {
            setLastImage(assets[0].uri)
        }
    }

    async function Postar(idViagem) {
        if (titulo === "" || descricao == "") {
            MostrarModal("Campos vazios. Um ou mais campos de senha foram digitados incorretamente, preencha todos os campos para continuar", setShowModalMensagem, setMensagemModal)
            return;
        }

        setLoading(true)
        await api.post(`/PostagensViagens/Postar`, {
            titulo: titulo,
            descricao: descricao,
            idViagem: idViagem,
            dataPostagem: moment().format('YYYY-MM-DDTHH:mm:ss')
        })
            .then((e) => {
                PostImages(e.data, arrayImages)
            })
            .catch(() => {
                MostrarModal("Erro ao postar viagem. Verifique se digitou corretamente nos campos indicados e tente novamente", setShowModalMensagem, setMensagemModal)
            })
        setLoading(false)
    }

    async function PostImages(idPostagem, array) {

        array.forEach(async (imagem) => {
            const form = new FormData();

            form.append("IdPostagem", idPostagem)
            form.append("Arquivo", {
                uri: imagem,
                name: `image.${imagem.split(".").pop()}`,
                type: `image/${imagem.split(".").pop()}`,
            });

            await api.post(`/GaleriaImagens`, form, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).catch((e) => console.log(e) && alert(e))
        });
        navigation.replace(`main`, { screen: "Home" })
    }

    useEffect(() => {
        pickerLatestImage()

        if (image !== null) {
            arrayImages.push(image)
        }

    }, [image])



    return (
        <ScrollView style={{ backgroundColor: "#FCEDFF" }} >
            <Container>
                <ImageDestaque
                    source={{ uri: arrayImages[0] }}
                />

                <ContainerOtherImages style={arrayImages.length <= 0 && { display: `none` }}>
                    <ScrollView
                        horizontal={true}
                        style={{ flexDirection: `row` }}
                    >
                        {
                            arrayImages.length > 0 &&
                            arrayImages.map((x, i) => {
                                return (
                                    <TouchableOpacity key={i}>
                                        <OtherImages
                                            source={{ uri: x }}
                                        />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </ContainerOtherImages>

                <View style={{
                    alignItems: "center",
                    justifyContent: `center`,
                    margin: 40,
                    gap: 10
                }}>
                    <Shadow
                        startColor="#000"
                        endColor="#000"
                        distance={0}
                        offset={[4, 4]}
                    >
                        <AddPicture
                            onPress={() => pickerGalery()}
                        >
                            <Image
                                width={`100%`}
                                height={`100%`}
                                style={{ position: `absolute` }}
                                source={{ uri: lastImage }}
                            />

                            <MaterialIcons name="add" size={80} color="#fff" />
                        </AddPicture>
                    </Shadow>

                    <TitleViagens style={{ fontSize: 16 }}>Adicionar imagens</TitleViagens>
                </View>

                <ShadowDefault
                    mb={20}
                    render={
                        <InputPost
                            placeholder={`Título do post`}
                            onChangeText={(txt) => setTitulo(txt)}
                        />
                    }
                />

                <ShadowDefault
                    mb={60}
                    render={
                        <InputPost
                            placeholder={`Comentários do post`}
                            multiline={true}
                            onChangeText={(txt) => setDescricao(txt)}
                        />
                    }
                />

                <ShadowDefault
                    render={
                        <ButtonViagem
                            style={{ backgroundColor: `#8531C6` }}
                            onPress={loading ? null : () => {
                                Postar(route.params.idViagem)
                            }}
                        >
                            <TextButtonViagem style={{ color: `#fff` }}>{loading ? "Postando..." : "Postar"}</TextButtonViagem>
                        </ButtonViagem>
                    }
                />

                <ModalInformativo
                    mensagem={mensagemModal}
                    showModal={showModalMensagem}
                    setShowModal={setShowModalMensagem}
                />
            </Container>
        </ScrollView>
    )
}