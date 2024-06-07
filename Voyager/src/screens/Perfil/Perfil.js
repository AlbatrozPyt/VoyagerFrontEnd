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
import {
  ButtonGuia,
  ContainerGuia,
  TextGuia,
} from "../../components/MenuGuia/style";
import { useState } from "react";
import { GuiaPerfil } from "../../components/MenuGuia/MenuGuia";
import { PostFeed } from "../../components/PostFeed/PostFeed";
import { ButtonViagem, TextButtonViagem } from "../ViagemAtual/style";

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
              source={require("../../assets/images/PedroPerfil.png")}
            />

            <ButtonEdit
              onPress={() => navigation.navigate(`EditPerfil`)}
            >
              <EditIcon source={require("../../assets/images/edit.png")} />
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

          <Shadow
            startColor="rgba(0, 0, 0, .2)"
            endColor="rgba(0, 0, 0, .2)"
            distance={0}
            offset={[4, 4]}
            style={{ borderRadius: 10 }}
          >
            <ContentBio>
              <TextBio>
                Sou fascinado por viajar, já rodei os 4 cantos da terra em busca
                de me conhencer melhor, vem com o papai kkk.
              </TextBio>
            </ContentBio>
          </Shadow>
        </ContainerBio>

        <GuiaPerfil setGuia={setGuia} />

        {
          guia === `posts` &&
          <Shadow
            startColor="#8531C6"
            endColor="#8531C6"
            distance={0}
            offset={[8, 8]}
            containerStyle={{ marginBottom: 20 }}
          >
            <Shadow
              startColor="#000"
              endColor="#000"
              distance={0}
              offset={[2.5, 2.5]}
            >
              <ButtonViagem onPress={() => navigation.navigate(`CriarPost`)}>
                <TextButtonViagem>compartilhe sua viagem</TextButtonViagem>
              </ButtonViagem>
            </Shadow>
          </Shadow>
        }

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
