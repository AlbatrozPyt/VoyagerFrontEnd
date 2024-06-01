import { Image, ScrollView, TouchableOpacity } from "react-native";
import { Container } from "../../components/Container/style";
import { IconBack } from "../ViewPost/style";
import { LogoViagens } from "../Viagens/style";
import {
  ContainerPostIts,
  PostIts,
  TextData,
  TextDestino,
  TitleViagensFuturas,
} from "../ViagensFuturas/style";

export const HistoricoViagens = ({ navigation }) => {
  return (
    <Container>
      <TouchableOpacity
        style={{width: '100%'}}
        onPress={() => navigation.navigate('Viagens')}
      >
        <IconBack source={require("../../assets/images/back.png")} />
      </TouchableOpacity>

      <LogoViagens
        source={require("../../assets/images/LogoMinhasViagens.png")}
      />

      <TitleViagensFuturas>
        Histórico de viagens{" "}
        <Image source={require("../../assets/images/historico.png")} />
      </TitleViagensFuturas>

      <ScrollView style={{ width: "100%" }}>
        <ContainerPostIts>
          {[0, 1, 2, 3, 4].map(() => {
            return (
              <PostIts>
                <Image
                  style={{ position: "absolute" }}
                  source={require("../../assets/images/post-it-2.png")}
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
