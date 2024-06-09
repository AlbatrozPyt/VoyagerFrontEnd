import { Image, ScrollView, TouchableOpacity } from "react-native";
import { Container } from "../../components/container/style";
import { LogoViagens } from "../Viagens/style";
import {
  ContainerPostIts,
  PostItImage,
  PostIts,
  TextData,
  TextDestino,
  TitleViagensFuturas,
} from "../ViagensFuturas/style";

import { Back } from "../../components/Button/index";
import { MinhasViagens } from "../../components/Logo/Logo";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export const HistoricoViagens = ({ navigation }) => {
  return (
    <Container>
      <Back navigation={navigation} screen={"Viagens"} />

      <MinhasViagens />

      <TitleViagensFuturas>
        Histórico de viagens{" "}
        <MaterialCommunityIcons name="airplane-clock" size={30} color="black" />
      </TitleViagensFuturas>

      <ScrollView style={{ width: "100%" }}>
        <ContainerPostIts>
          {[0, 1, 2, 3, 4].map((x) => {
            return (
              <PostIts
                key={x}
                onPress={() =>
                  navigation.navigate("ViagemAtual", { type: "historico" })
                }
              >
                <PostItImage
                  source={{
                    uri: "https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/post-it-2.png?raw=true",
                  }}
                />

                <TextDestino>Paris</TextDestino>
                <TextData>29/08 - 02/09</TextData>
              </PostIts>
            );
          })}
        </ContainerPostIts>
      </ScrollView>
    </Container>
  );
};
