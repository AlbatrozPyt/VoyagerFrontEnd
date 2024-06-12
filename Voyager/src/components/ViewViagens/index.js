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

import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment";

// Acompanhar viagem atual
export const AcompanharViagem = ({ viagem, navigation}) => {
  return (
    <ContainerBoxs
      onPress={() => navigation.navigate("ViagemAtual", { type: "acompanhar", idViagem: viagem.id })}
    >
      <BoxOneViagem color={"#DEFF97"}>
        <BoxTwoViagem color={"#DEFF97"}>
          <BoxThreeViagem color={"#DEFF97"}>
            <IconViagens
              source={{
                uri: `https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/binoculos.png?raw=true`,
              }}
            />

            <ContentViagens>
              <TitleViagens>Acompanhar viagem</TitleViagens>

              <ContainerInfos>
                <BoxInfo>
                  <TextInfo>
                    Data{"      "}
                    <MaterialCommunityIcons
                      name="calendar-month"
                      size={24}
                      color="black"
                    />
                  </TextInfo>
                  <TextInfo>
                    {moment(viagem.dataInicial).format("DD/MM")} - {moment(viagem.dataFinal).format("DD/MM")}
                  </TextInfo>
                </BoxInfo>

                <BoxInfo>
                  <TextInfo>
                    Destino{"       "}
                    <MaterialCommunityIcons
                      name="map-outline"
                      size={24}
                      color="black"
                    />
                  </TextInfo>
                  <TextInfo>{viagem.endereco.cidadeDestino}</TextInfo>
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
  screen,
}) => {
  return (
    <ContainerBoxs onPress={screen === "AcompanharViagem" ? null : () => navigation.navigate(screen)}>
      <BoxOneViagem color={postItColor}>
        <BoxTwoViagem color={postItColor}>
          <BoxThreeViagem color={postItColor}>
            <IconViagens
              source={
                icon === "historico"
                  ? {
                      uri: `https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/historico.png?raw=true`,
                    }
                  : ( icon === "futuras" ? {
                      uri: `https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/agenda.png?raw=true`,
                    }
                  : {
                    uri: `https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/binoculos.png?raw=true`
                  })
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
