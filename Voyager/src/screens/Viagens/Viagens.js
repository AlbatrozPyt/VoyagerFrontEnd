import { Image, StatusBar, Text } from "react-native";
import { Container } from "../../components/Container/style";
import { LogoViagens, NovaViagem } from "./style";
import { AcompanharViagem, PostItDefault } from "../../components/ViewViagens";
import { Shadow } from "react-native-shadow-2";

const viagem = {
  dataInicial: "29/05",
  dataFinal: "02/06",
  destino: "Ilhas Maldivas",
};

export const Viagens = ({ navigation }) => {
  return (
    <Container>
      <LogoViagens
        source={require("../../assets/images/LogoMinhasViagens.png")}
      />

      <AcompanharViagem viagem={viagem} />

      <PostItDefault
        title={"Histórico de viagens"}
        description={"Veja suas viagens que já aconteceram"}
        icon={"historico"}
        postItColor={"#F7E87B"}
        navigation={navigation}
        screen={'HistoricoViagens'}
      />

      <PostItDefault
        title={"Viagens futuras"}
        description={"Veja suas viagens que ainda irão acontecer"}
        postItColor={"#B7FBFF"}
        navigation={navigation}
        screen={'ViagensFuturas'}
      />

      <Shadow
        startColor="#000"
        endColor="#000"
        distance={0}
        offset={[4, 4]}
        containerStyle={{ alignSelf: "flex-end", margin: 20 }}
      >
        <NovaViagem
          onPress={() => navigation.navigate('ViagemAtual')}
        >
          <Image source={require("../../assets/images/nova-viagem.png")} />
        </NovaViagem>
      </Shadow>
    </Container>
  );
};
