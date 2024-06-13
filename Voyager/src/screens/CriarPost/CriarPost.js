import { Shadow } from "react-native-shadow-2"
import { Container } from "../../components/container/style"
import { AddPicture, ContainerOtherImages, ImageDestaque, InputPost, OtherImages } from "./style"
import { MaterialIcons } from '@expo/vector-icons';

import { ButtonViagem, TextButtonViagem } from "../ViagemAtual/style";
import { Image, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { ShadowDefault } from "../../components/Shadow";

import * as MediaLibrary from "expo-media-library"
import * as ImagePicker from "expo-image-picker"
import { TitlePreviewFeed } from "../../components/PostFeed/style";
import { TitleViagens } from "../../components/ViewViagens/style";
import api from "../../service/Service";


export const CriarPost = ({ navigation, route }) => {

    const [image, setImage] = useState(null)
    const [lastImage, setLastImage] = useState(null)

    const [descricao, setDescricao] = useState(null)
    const [titulo, setTitulo] = useState(null)

    const [arrayImages, setArrayImages] = useState([])

    const [dep, setDep] = useState(false)

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
        await api.post(`/PostagensViagens/Postar`, {
            titulo: titulo,
            descricao: descricao,
            idViagem: idViagem
        })
            .then((e) => {
                PostImages(e.data, arrayImages)
            })
            .catch(() => {
                console.log('Erro ao criar post')
            })
    }

    async function PostImages(idPostagem, array) {
        var form = new FormData()
        form.append(`IdPostagem`, idPostagem)
        form.append(`galeriaFotos`, array)

        await api.post(`/GaleriaImagens/${idPostagem}`, form, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(() => navigation.navigate(`main`)).catch((e) => console.log(e))
    }

    useEffect(() => {
        pickerLatestImage()

        if (image !== null) {
            arrayImages.push(image)
        }

    }, [image])



    return (
        <ScrollView>
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
                                    <OtherImages
                                        key={i}
                                        source={{ uri: x }}
                                    />
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
                            onPress={() => {
                                Postar(route.params.idViagem)
                            }}
                        >
                            <TextButtonViagem style={{ color: `#fff` }}>Postar</TextButtonViagem>
                        </ButtonViagem>
                    }
                />
            </Container>
        </ScrollView>
    )
}