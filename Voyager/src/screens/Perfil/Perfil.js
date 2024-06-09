import { Image, ScrollView } from "react-native";
import { Container } from "../../components/container/style";
import {
  ButtonEdit,
  ButtonGuiaPerfil,
  ContainerBio,
  ContentBio,
  ContentInfo,
  EditIcon,
  ImageTop,
  PerfilInfo,
  TextBio,
  TextInfo,
  UserImage,
} from "./style";
import { Shadow } from "react-native-shadow-2";
import { TitleDefault } from "../../components/Text/style";
import { useState } from "react";
import { GuiaPerfil } from "../../components/MenuGuia/MenuGuia";
import { PostFeed } from "../../components/PostFeed/PostFeed";
import { ButtonViagem, TextButtonViagem } from "../ViagemAtual/style";
import { Feather } from "@expo/vector-icons";
import { ShadowButton2, ShadowOpacity } from "../../components/Shadow";

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

  return (
    <ScrollView>
      <ImageTop source={require("../../assets/images/ImageTop.png")} />
      <Container>
        <PerfilInfo>
          <Shadow
            startColor="#000"
            endColor="#000"
            distance={0}
            offset={[4, 4]}
            style={{ borderRadius: 8 }}
          >
            <UserImage
              source={{
                uri: `https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/PedroPerfil.png?raw=true`,
              }}
            />

            <ButtonEdit onPress={() => navigation.navigate(`EditPerfil`)}>
              <Feather name="edit-2" size={24} color="#000" />
            </ButtonEdit>
          </Shadow>

          <Shadow
            startColor="rgba(0, 0, 0, .2)"
            endColor="rgba(0, 0, 0, .2)"
            distance={0}
            offset={[4, 4]}
            containerStyle={{ bottom: 50, right: 60 }}
            style={{ borderRadius: 10 }}
          >
            <ContentInfo>
              <TextInfo>Heitor Perrota</TextInfo>
              <TextInfo>23 anos</TextInfo>
            </ContentInfo>
          </Shadow>
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
