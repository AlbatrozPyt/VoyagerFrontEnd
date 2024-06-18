import { Image, ScrollView, StatusBar, Text } from "react-native";
import { TitleDefault } from "../../components/Text/style";
import {
  ContainerInfoLocal,
  ContentDescricaoLocal,
  DescricaoLocalBox,
  GaleriaLocalBox,
  LinkVoltar,
  LocalMapBox,
  TextDescricaoLocal,
  TitleDescricaoLocal,
  TitleGaleriaLocal,
  TitleInfoLocal,
} from "./style";
import { LinkMedium } from "../../components/Link/style";
import { ShadowInfoLocal, ShadowOpacity } from "../../components/Shadow";
import { ContentBio, TextBio } from "../Perfil/style";
import { ImageGaleria, TitlePost } from "../ViewPost/style";
import { Shadow } from "react-native-shadow-2";

export const InfoLocal = ({ navigation, route }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ContainerInfoLocal>
        <StatusBar
          barStyle={"dark-content"}
          translucent={true}
          backgroundColor={"#8531C6"}
        />

        <LocalMapBox>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{ uri: (route.params.local.imagem !== "Erro ao buscar imagem" && route.params.local.imagem !== "Url não encontrada") ? route.params.local.imagem : `https://voyagerblobstorage.blob.core.windows.net/voyagercontainerblob/ImagemLocal_Default.jpg` }}
          />
        </LocalMapBox>

        <TitleInfoLocal>{route.params.local.nome}</TitleInfoLocal>
        <DescricaoLocalBox>
          <ShadowInfoLocal
            styleRender={{ width: 320 }}
            render={
              <ContentDescricaoLocal>
                <TitleDescricaoLocal>Sobre o local:</TitleDescricaoLocal>
                <TextDescricaoLocal>
                  {route.params.local.descricao}
                </TextDescricaoLocal>
              </ContentDescricaoLocal>
            }
          />
          <ShadowInfoLocal
            styleRender={{ width: 320 }}
            render={
              <ContentDescricaoLocal>
                <TitleDescricaoLocal>Atividades sugeridas:</TitleDescricaoLocal>
                <TextDescricaoLocal>
                  {route.params.local.atividade}
                </TextDescricaoLocal>
              </ContentDescricaoLocal>
            }
          />
        </DescricaoLocalBox>

        <LinkVoltar
          onPress={() => navigation.goBack()}
          style={{ color: "#8531C6" }}
        >
          <Text>Voltar à página anterior</Text>
        </LinkVoltar>
      </ContainerInfoLocal>
    </ScrollView>
  );
};
