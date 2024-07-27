import { Shadow } from "react-native-shadow-2";
import { Container } from "../../components/container/style";
import {
  ButtonAction,
  ContainerEditPerfil,
  ContainerEditPhoto,
  ContainerInputsPerfil,
  ContentEdit,
  ContentEditRow,
  InputBio,
  InputPerfil,
  LabelPerfil,
  TakePicture,
  TopImageEdit,
  UserImage,
} from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, StatusBar, View } from "react-native";
import { ButtonModalRotina } from "../CriarRotina/style";
import { TitleDefault } from "../../components/Text/style";
import {
  ShadowButton2,
  ShadowDefault,
  ShadowOpacity,
  ShadowPerfilImage,
  ShadowTakePicture,
} from "../../components/Shadow";
import api from "../../service/Service";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/MyContext";
import { tokenClean } from "../../utils/Auth";
import { ModalCamera } from "../../components/ModalCamera/ModalCamera";
import { mask, unMask, unmask } from "remask";
import { apiViaCep } from "../../service/viaCep";
import { MostrarModal } from "../../utils/MostrarModal"
import { ModalInformativo } from "../../components/Modal";

export const EditPerfil = ({ navigation, route }) => {
  const { user } = useContext(UserContext);

  const [bio, setBio] = useState(null);
  const [foto, setFoto] = useState(null);
  const [dadosEndereco, setDadosEndereco] = useState(null)

  const [showModalCamera, setShowModalCamera] = useState(false)
  const [uriCameraCapture, setUriCameraCapture] = useState(null)

  const [mensagemModal, setMensagemModal] = useState("")
  const [showModalMensagem, setShowModalMensagem] = useState(false)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setBio(route.params.bio)
    setFoto(route.params.foto)
    if (route.params.enderecoUsuario) {
      setDadosEndereco(route.params.enderecoUsuario)
      console.log(route.params.enderecoUsuario);
      console.log(dadosEndereco);
    }

  }, [route])

  async function PutPerfil() {
    if (dadosEndereco === null) {
      setLoading(true)
      await api
        .put(`/Usuarios/${user.jti}`, {
          bio: `${bio.split()}`
        }).then(() => {
          UpdateProfilePhoto()
        })
        .catch(() => {
          MostrarModal("Erro ao atualizar dados do perfil. Verifique se os dados foram digitados corretamente e tente novamente", setShowModalMensagem, setMensagemModal)
        });
        setLoading(false)
    } else {

      if (dadosEndereco.cep.length !== 8 && dadosEndereco.cep > 0) {
        alert("Preencha o CEP corretamente!")
        return
      }

      setLoading(true)
      await api
        .put(`/Usuarios/${user.jti}`, {
          cep: unmask(dadosEndereco.cep),
          estado: dadosEndereco.estado,
          cidade: dadosEndereco.cidade,
          logradouro: dadosEndereco.logradouro,
          bio: `${bio.split()}`
        }).then(() => {
          UpdateProfilePhoto()
        })
        .catch(() => {
          MostrarModal("Erro ao atualizar dados do perfil. Verifique se os dados foram digitados corretamente e tente novamente", setShowModalMensagem, setMensagemModal)
        });
        setLoading(false)
    }
  }

  async function UpdateProfilePhoto() {
    let imagemValida = true;
    if (uriCameraCapture != null) {
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
      }).catch(error => {
        MostrarModal("Erro atualizar foto de perfil. Verifique se o arquivo enviado é válido e tente novamente.", setShowModalMensagem, setMensagemModal)
        imagemValida = false;
      })
    }

    if (imagemValida) {
      navigation.navigate("Perfil");
    }

  }

  const BuscarEnderecoViaCep = async (cep) => {
    await apiViaCep.get(`/${cep}/json/`)
      .then(response => {
        setDadosEndereco({
          ...dadosEndereco,
          logradouro: response.data.logradouro,
          cidade: response.data.localidade,
          estado: response.data.uf
        })
      })
      .catch(erro => {
        MostrarModal("Erro ao buscar endereço. Verifique se o cep foi digitado corretamente e tente novamente.", setShowModalMensagem, setMensagemModal)
        console.log(erro);
      })
  }

  useEffect(() => {
    if (dadosEndereco != null && dadosEndereco.cep.length === 9) {
      BuscarEnderecoViaCep(unMask(dadosEndereco.cep))
    }

    if(dadosEndereco != null && dadosEndereco.cep.length === 0){
      setDadosEndereco(null)
    }
  }, [dadosEndereco])


  return (
    <ContainerEditPerfil>
      <TopImageEdit
        source={{ uri: 'https://voyagerblobstorage.blob.core.windows.net/voyagercontainerblob/ImageTopEdit.png' }}
      />



      <ScrollView style={{ width: "100%" }} contentContainerStyle={{ height: "100%", alignItems: "center", width: "100%" }}>
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

            <ShadowTakePicture>
              <TakePicture onPress={() => setShowModalCamera(true)}>
                <MaterialIcons name="add-a-photo" size={30} color="#fff" />
              </TakePicture>
            </ShadowTakePicture>

          </ShadowPerfilImage>


        </ContainerEditPhoto>

        <ContainerInputsPerfil>

          <ContentEdit>
            <LabelPerfil>Editar Bio:</LabelPerfil>

            <ShadowOpacity
              styleRender={{ width: "100%" }}
              render={
                <InputPerfil
                  multiline={true}
                  placeholder={"Insira sua Bio Aqui"}
                  onChangeText={(txt) => setBio(txt)}
                  value={bio}
                />
              }
            />
          </ContentEdit>

          <ContentEdit>
            <LabelPerfil>Editar Endereço:</LabelPerfil>

            <ContentEditRow>
              <ShadowOpacity
                styleRender={{ width: 110 }}
                render={
                  <InputPerfil
                    width={"100%"}
                    placeholder={"CEP:"}
                    onChangeText={(txt) => setDadosEndereco({ ...dadosEndereco, cep: txt })}
                    value={dadosEndereco != null ? mask(dadosEndereco.cep, "99999-999") : ""}
                    keyboardType={"numeric"}
                    maxLength={9}
                  />
                }
              />
              <ShadowOpacity
                styleRender={{ width: 215 }}
                render={
                  <InputPerfil
                    width={"100%"}
                    placeholder={"Cidade"}
                    onChangeText={(txt) => setDadosEndereco({ ...dadosEndereco, cidade: txt })}
                    value={dadosEndereco != null ? dadosEndereco.cidade : ""}
                    editable={false}
                  />
                }
              />
            </ContentEditRow>

            <ContentEditRow>
              <ShadowOpacity
                styleRender={{ width: 250 }}
                render={
                  <InputPerfil
                    width={"100%"}
                    placeholder={"Logradouro"}
                    onChangeText={(txt) => setDadosEndereco({ ...dadosEndereco, logradouro: txt })}
                    value={dadosEndereco != null ? dadosEndereco.logradouro : null}
                    editable={false}
                  />
                }
              />
              <ShadowOpacity
                styleRender={{ width: 75 }}
                render={
                  <InputPerfil
                    width={"100%"}
                    placeholder={"UF"}
                    onChangeText={(txt) => setDadosEndereco({ ...dadosEndereco, estado: txt })}
                    value={dadosEndereco != null ? dadosEndereco.estado : null}
                    editable={false}
                    maxLength={2}
                  />
                }
              />
            </ContentEditRow>

          </ContentEdit>

        </ContainerInputsPerfil>

        <ShadowButton2
          styleRender={{ width: 280 }}
          render={
            <ButtonAction onPress={() => PutPerfil()}>
              <TitleDefault style={{ color: `#8531C6` }}>{loading ? "salvando..." : "salvar"}</TitleDefault>
            </ButtonAction>
          }
        />

        <ShadowDefault
          styleRender={{ width: 280 }}
          render={
            <ButtonAction
              onPress={() => navigation.navigate(`Perfil`)}
              style={{ backgroundColor: `#8531C6` }}
            >
              <TitleDefault style={{ color: `#fff` }}>voltar</TitleDefault>
            </ButtonAction>
          }
        />

        <ModalCamera
          visible={showModalCamera}
          setCameraCapture={setUriCameraCapture}
          setShowCameraModal={setShowModalCamera}
          getMediaLibrary={true}
        />


      </ScrollView>

      <ModalInformativo
        mensagem={mensagemModal}
        showModal={showModalMensagem}
        setShowModal={setShowModalMensagem}
      />
    </ContainerEditPerfil>
  );
};