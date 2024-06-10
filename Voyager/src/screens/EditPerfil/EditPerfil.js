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
import  api  from "../../service/Service";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/MyContext";

export const EditPerfil = ({ navigation, route }) => {
  const { user } = useContext(UserContext);

  const [bio, setBio] = useState(null);
  const [cep, setCep] = useState(null);
  const [logradouro, setLogradouro] = useState(null);
  const [estado, setEstado] = useState(null);
  const [cidade, setCidade] = useState(null);

  async function PutPerfil() {
    await api
      .put(`/Usuarios?idUsuario=${user.jti}`, {
        bio: bio,
        cep: cep,
        logradouro: logradouro,
        estado: estado,
        cidade: cidade,
      })
      .then(() => {
        navigation.navigate("Perfil");
      })
      .catch(() => console.log("Erro ao atualizar perfil"));
  }

  return (
    <ScrollView>
      <Container>
        <TopImageEdit
          source={require(`../../assets/images/ImageTopEdit.png`)}
        />

        <ContainerEditPhoto>
          <ShadowPerfilImage>
            <UserImage source={require(`../../assets/images/PedroBig.png`)} />
          </ShadowPerfilImage>

          <ShadowTakePicture>
            <TakePicture>
              <MaterialIcons name="add-a-photo" size={30} color="#fff" />
            </TakePicture>
          </ShadowTakePicture>
        </ContainerEditPhoto>

        <ContainerInputsPerfil>
          <ContentEdit>
            <LabelPerfil>Bio</LabelPerfil>

            <Shadow offset={[4, 2]} style={{ borderRadius: 10 }}>
              <InputPerfil
                multiline={true}
                placeholder={"Bio"}
                onChangeText={(txt) => setBio(txt)}
              />
            </Shadow>
          </ContentEdit>

          <ContentEdit>
            <LabelPerfil>Cep</LabelPerfil>

            <Shadow offset={[4, 2]} style={{ borderRadius: 10 }}>
              <InputPerfil
                keyboardType={"numeric"}
                placeholder={"Cep"}
                onChangeText={(txt) => setCep(txt)}
              />
            </Shadow>
          </ContentEdit>

          <ContentEdit>
            <LabelPerfil>Logradouro</LabelPerfil>

            <Shadow offset={[4, 2]} style={{ borderRadius: 10 }}>
              <InputPerfil
                placeholder={`Logradouro`}
                onChangeText={(txt) => setLogradouro(txt)}
              />
            </Shadow>
          </ContentEdit>

          <ContentEdit>
            <LabelPerfil>Estado</LabelPerfil>

            <Shadow offset={[4, 2]} style={{ borderRadius: 10 }}>
              <InputPerfil
                placeholder={`Estado`}
                onChangeText={(txt) => setEstado(txt)}
              />
            </Shadow>
          </ContentEdit>

          <ContentEdit>
            <LabelPerfil>Cidade</LabelPerfil>

            <Shadow offset={[4, 2]} style={{ borderRadius: 10 }}>
              <InputPerfil
                placeholder={`Cidade`}
                onChangeText={(txt) => setBio(txt)}
              />
            </Shadow>
          </ContentEdit>
        </ContainerInputsPerfil>

        <ShadowButton2
          render={
            <ButtonModalRotina onPress={() => PutPerfil()}>
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
      </Container>
    </ScrollView>
  );
};
