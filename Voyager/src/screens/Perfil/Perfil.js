import { Image, ScrollView } from "react-native";
import { Container } from "../../components/Container/style";
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
  const [guia, setGuia] = useState(true);

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

            <ButtonEdit>
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
