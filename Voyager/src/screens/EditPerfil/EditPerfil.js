import { Shadow } from "react-native-shadow-2";
import { Container } from "../../components/container/style";
import {
  ContainerEditPhoto,
  ContainerInputsPerfil,
  ContentEdit,
  InputBio,
  InputPerfil,
  LabelPerfil,
  TakePicture,
  TopImageEdit,
  UserImage,
} from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, View } from "react-native";
import { ButtonModalRotina } from "../CriarRotina/style";
import { TitleDefault } from "../../components/Text/style";
import {
  ShadowButton2,
  ShadowDefault,
  ShadowPerfilImage,
  ShadowTakePicture,
} from "../../components/Shadow";
import api from "../../service/Service";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/MyContext";
import { tokenClean } from "../../utils/Auth";
import { ModalCamera } from "../../components/ModalCamera/ModalCamera";


export const EditPerfil = ({ navigation, route }) => {
  const { user } = useContext(UserContext);

  const [bio, setBio] = useState(null);
  const [nome, setNome] = useState(null);
  const [foto, setFoto] = useState(null);

  const [showModalCamera, setShowModalCamera] = useState(false)
  const [uriCameraCapture, setUriCameraCapture] = useState(null)


  useEffect(() => {
    setBio(route.params.bio)
    setNome(route.params.nome)
    setFoto(route.params.foto)
  }, [route])

  async function PutPerfil() {
    await api
      .put(`/Usuarios/${user.jti}`, {
        bio: bio
      })
      .then(() => {
        navigation.navigate("Perfil");
      })
      .catch(() => console.log("Erro ao atualizar perfil"));
  }

  async function UpdateProfilePhoto() {

    const formData = new FormData();
    formData.append("ArquivoFoto", {
      uri: uriCameraCapture,
      name: `image.${uriCameraCapture.split(".")[1]}`,
      type: `image/${uriCameraCapture.split(".")[1]}`
    })

    await api.put(`/Usuarios/AtualizarFotoPerfil/${user.jti}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    if (uriCameraCapture != null) {
      UpdateProfilePhoto()
    }
  }, [uriCameraCapture])

  return (
    <ScrollView>
      <Container>
        <TopImageEdit
          source={{uri : 'https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/ImageTopEdit.png'}}
        />

        <ContainerEditPhoto>
          <ShadowPerfilImage>
            {uriCameraCapture == null ? (
              <>
                <UserImage source={{ uri: foto }} />
              </>
            ) : (
              <>
                <UserImage source={{ uri: uriCameraCapture }} />
              </>
            )}

          </ShadowPerfilImage>

          <ShadowTakePicture>
            <TakePicture onPress={() => setShowModalCamera(true)}>
              <MaterialIcons name="add-a-photo" size={30} color="#fff" />
            </TakePicture>
          </ShadowTakePicture>
        </ContainerEditPhoto>

        <ContainerInputsPerfil>

          {/* <ContentEdit>
            <LabelPerfil>Nome</LabelPerfil>

            <Shadow offset={[4, 2]} style={{ borderRadius: 10 }}>
              <InputPerfil
                keyboardType={"string"}
                placeholder={"Nome"}
                onChangeText={(txt) => setNome(txt)}
                value={nome}
                editable={false}
              />
            </Shadow>
          </ContentEdit> */}

          <ContentEdit>
            <LabelPerfil>Bio</LabelPerfil>

            <Shadow offset={[4, 2]} style={{ borderRadius: 10 }}>
              <InputPerfil
                multiline={true}
                placeholder={"Bio"}
                onChangeText={(txt) => setBio(txt)}
                value={bio}
              />
            </Shadow>
          </ContentEdit>

        </ContainerInputsPerfil>

        <ShadowButton2
          render={
            <ButtonModalRotina onPress={
              () => PutPerfil() &&
                UpdateProfilePhoto() &&
                navigation.navigate(`Perfil`)
            }>
              <TitleDefault style={{ color: `#8531C6` }}>salvar</TitleDefault>
            </ButtonModalRotina>
          }
        />

        <ShadowDefault
          render={
            <ButtonModalRotina
              onPress={() => navigation.navigate(`Perfil`)}
              style={{ backgroundColor: `#8531C6` }}
            >
              <TitleDefault style={{ color: `#fff` }}>voltar</TitleDefault>
            </ButtonModalRotina>
          }
        />

        <ModalCamera
          visible={showModalCamera}
          setCameraCapture={setUriCameraCapture}
          setShowCameraModal={setShowModalCamera}
          getMediaLibrary={true}
        />

      </Container>
    </ScrollView>
  );
};