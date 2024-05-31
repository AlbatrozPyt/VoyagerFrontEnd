import { FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import { Container } from "../../components/Container/style";
import { LogoViagens } from "../Viagens/style";
import { IconBack } from "../ViewPost/style";
import {
  ContainerPostIts,
  PostIts,
  TextData,
  TextDestino,
  TitleViagensFuturas,
} from "./style";
import { Shadow } from "react-native-shadow-2";

export const ViagensFuturas = ({ navigation }) => {
  return (
    <Container>
      <TouchableOpacity
        style={{ width: "100%" }}
        onPress={() => navigation.replace("main")}
      >
        <IconBack source={require("../../assets/images/back.png")} />
      </TouchableOpacity>

      <LogoViagens
        source={require("../../assets/images/LogoMinhasViagens.png")}
      />

      <TitleViagensFuturas>
        Viagens Futuras{" "}
        <Image source={require("../../assets/images/agenda.png")} />
      </TitleViagensFuturas>

      <ScrollView style={{ width: "100%" }}>
        <ContainerPostIts>
          {[0, 1, 2, 3, 4].map(() => {
            return (
              <PostIts>
                <Image
                  style={{ position: "absolute" }}
                  source={require("../../assets/images/post-it.png")}
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
