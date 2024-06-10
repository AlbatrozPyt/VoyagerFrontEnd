import { ScrollView } from "react-native";
import { Container } from "../../components/container/style";
import {
  ButtonEdit,
  ContainerBio,
  ContentBio,
  ContentInfo,
  ImageTop,
  PerfilInfo,
  TextBio,
  TextInfo,
  UserImage,
} from "./style";
import { TitleDefault } from "../../components/Text/style";
import { useContext, useEffect, useState } from "react";
import { GuiaPerfil } from "../../components/MenuGuia/MenuGuia";
import { PostFeed } from "../../components/PostFeed/PostFeed";
import { ButtonViagem, TextButtonViagem } from "../ViagemAtual/style";
import { Feather } from "@expo/vector-icons";
import {
  ShadowBoxPerfil,
  ShadowButton2,
  ShadowOpacity,
  ShadowPerfilImage,
} from "../../components/Shadow";
import { UserContext } from "../../contexts/MyContext";

import api from "../../service/Service";

const mockFeed = [
  {
    title: "Pedro - Roma",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.",
    id: 1,
  },
  {
    title: "Renato - Paris",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.",
    id: 2,
  },
  {
    title: "Murilo - Japão",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.",
    id: 3,
  },
];

export const Perfil = ({ navigation }) => {
  const [guia, setGuia] = useState(`posts`);
  const { user } = useContext(UserContext);
  const [response, setResponse] = useState(null);

  async function GetUser() {
    const get = await api.get(`/Usuarios?idUsuario=${user.jti}`);
    setResponse(get.data);
  }

  useEffect(() => {
    GetUser();
    console.log(response);
  }, [1000]);

  return (
    <ScrollView>
      <ImageTop source={require("../../assets/images/ImageTop.png")} />
      <Container>
        <PerfilInfo>
          <ShadowPerfilImage>
            <UserImage
              source={{
                uri: `https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/PedroPerfil.png?raw=true`,
              }}
            />

            <ButtonEdit
              onPress={() => navigation.navigate(`EditPerfil`, { ...response })}
            >
              <Feather name="edit-2" size={24} color="#000" />
            </ButtonEdit>
          </ShadowPerfilImage>

          <ShadowBoxPerfil>
            <ContentInfo>
              {/* <TextInfo>{response.nome}</TextInfo>; */}
              {/* <TextInfo>23 anos</TextInfo> */}
            </ContentInfo>
          </ShadowBoxPerfil>
        </PerfilInfo>

        <ContainerBio>
          <TitleDefault>Sobre mim:</TitleDefault>

          <ShadowOpacity
            render={
              <ContentBio>
                <TextBio>
                  Sou fascinado por viajar, já rodei os 4 cantos da terra em
                  busca de me conhencer melhor, vem com o papai kkk.
                </TextBio>
              </ContentBio>
            }
          />
        </ContainerBio>

        <GuiaPerfil setGuia={setGuia} />

        {guia === `posts` && (
          <ShadowButton2
            render={
              <ButtonViagem onPress={() => navigation.navigate(`CriarPost`)}>
                <TextButtonViagem>compartilhe sua viagem</TextButtonViagem>
              </ButtonViagem>
            }
          />
        )}

        {guia === "posts"
          ? mockFeed.map((x) => {
              return <PostFeed key={x.id} post={x} navigation={navigation} />;
            })
          : mockFeed.map((x) => {
              return <PostFeed key={x.id} post={x} navigation={navigation} />;
            })}
      </Container>
    </ScrollView>
  );
};
