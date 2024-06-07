import { Image } from "react-native";
import { ContainerBoxs } from "../PostFeed/style";
import {
  BoxInfo,
  BoxOneViagem,
  BoxThreeViagem,
  BoxTwoViagem,
  ContainerInfos,
  ContentViagens,
  DescriptionViagens,
  IconViagens,
  TextInfo,
  TitleViagens,
} from "./style";

import { MaterialCommunityIcons } from '@expo/vector-icons';

// Acompanhar viagem atual
export const AcompanharViagem = ({ viagem, navigation }) => {
  return (
    <ContainerBoxs onPress={() => navigation.navigate('ViagemAtual', { type: 'acompanhar' })}>
      <BoxOneViagem color={"#DEFF97"}>
        <BoxTwoViagem color={"#DEFF97"}>
          <BoxThreeViagem color={"#DEFF97"}>
            <IconViagens
              source={{ uri: `https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/binoculos.png?raw=true` }}
            />

            <ContentViagens>
              <TitleViagens>Acompanhar viagem</TitleViagens>

              <ContainerInfos>
                <BoxInfo>
                  <TextInfo>
                    Data{"      "}
                    <Image source={require("../../assets/images/data.png")} />
                  </TextInfo>
                  <TextInfo>
                    {viagem.dataInicial} - {viagem.dataFinal}
                  </TextInfo>
                </BoxInfo>

                <BoxInfo>
                  <TextInfo>
                    Destino{"       "}
                    <Image
                      source={{ uri: `https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/destino.png` }}
                    />
                  </TextInfo>
                  <TextInfo>{viagem.destino.substr(0, 15)}...</TextInfo>
                </BoxInfo>
              </ContainerInfos>
            </ContentViagens>
          </BoxThreeViagem>
        </BoxTwoViagem>
      </BoxOneViagem>
    </ContainerBoxs>
  );
};

export const PostItDefault = ({
  title,
  description,
  icon,
  postItColor = "#fff",
  navigation,
  screen
}) => {
  return (
    <ContainerBoxs onPress={() => navigation.navigate(screen)}>
      <BoxOneViagem color={postItColor}>
        <BoxTwoViagem color={postItColor}>
          <BoxThreeViagem color={postItColor}>
            <IconViagens
              source={
                icon === "historico"
                  ? { uri: `https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/historico.png?raw=true` }
                  : { uri: `https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/agenda.png?raw=true` }
              }
            />

            <ContentViagens>
              <TitleViagens>{title}</TitleViagens>

              <DescriptionViagens>{description}</DescriptionViagens>
            </ContentViagens>
          </BoxThreeViagem>
        </BoxTwoViagem>
      </BoxOneViagem>
    </ContainerBoxs>
  );
};
