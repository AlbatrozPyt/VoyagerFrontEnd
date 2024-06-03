import { Image, StatusBar, Text } from "react-native";
import { LogoViagens, NovaViagem } from "./style";
import { AcompanharViagem, PostItDefault } from "../../components/ViewViagens";
import { Shadow } from "react-native-shadow-2";
import { Container } from '../../components/container/style'

const viagem = {
  dataInicial: "29/05",
  dataFinal: "02/06",
  destino: "Ilhas Maldivas",
};

export const Viagens = ({ navigation }) => {
  return (
    <Container>
      <LogoViagens
        style={{marginTop: 80}}
        source={require("../../assets/images/LogoMinhasViagens.png")}
      />


      {/* PostIt para acompanhar a sua viagem */}
      <AcompanharViagem viagem={viagem} navigation={navigation}/>
      
      {/* PostIt para ver o histórico de viagens*/}
      <PostItDefault
        title={"Histórico de viagens"}
        description={"Veja suas viagens que já aconteceram"}
        icon={"historico"}
        postItColor={"#F7E87B"}
        navigation={navigation}
        screen={'HistoricoViagens'}
      />

      {/* PostIt para as viagens que ainda vão acontecer */}
      <PostItDefault
        title={"Viagens futuras"}
        description={"Veja suas viagens que ainda irão acontecer"}
        postItColor={"#B7FBFF"}
        navigation={navigation}
        screen={'ViagensFuturas'}
      />

      {/* Botão para criar uma nova viagem */}
      <Shadow
        startColor="#000"
        endColor="#000"
        distance={0}
        offset={[4, 4]}
        containerStyle={{alignSelf: `flex-end`, margin: 22}}
      >
        <NovaViagem>
          <Image source={require("../../assets/images/nova-viagem.png")} />
        </NovaViagem>
      </Shadow>
    </Container>
  );
};
