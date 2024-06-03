import { FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import { Container } from "../../components/container/style";
import { LogoViagens } from "../Viagens/style";
import {
  ButtonViagem,
  Check,
  Checklist,
  ContainerRota,
  ContentCheck,
  ContentRota,
  IconCheck,
  Lugar,
  Rota,
  TextButtonViagem,
} from "./style";
import { Shadow } from "react-native-shadow-2";
import { TitleViagens } from "../../components/ViewViagens/style";
import { IconBack } from "../ViewPost/style";

let checklist = [
  {
    description: "Visitar o coliseu",
    status: 1,
  },
  {
    description: "Andar de bicicleta",
    status: 1,
  },
  {
    description: "Visitar o coliseu",
    status: 0,
  },
  {
    description: "Andar de bicicleta",
    status: 0,
  },
  {
    description: "Visitar o coliseu",
    status: 0,
  },
  {
    description: "Andar de bicicleta",
    status: 0,
  },
  {
    description: "Visitar o coliseu",
    status: 1,
  },
  {
    description: "Andar de bicicleta",
    status: 1,
  },
  {
    description: "Visitar o coliseu",
    status: 0,
  },
  {
    description: "Andar de bicicleta",
    status: 0,
  },
  {
    description: "Visitar o coliseu",
    status: 0,
  },
  {
    description: "Andar de bicicleta",
    status: 0,
  },
];

export const ViagemAtual = ({ navigation, route }) => {
  return (
    <Container>
      <TouchableOpacity
        style={{ width: "100%" }}
        onPress={() => navigation.navigate("Viagens")}
      >
        <IconBack source={require("../../assets/images/back.png")} />
      </TouchableOpacity>

      <LogoViagens
        source={require("../../assets/images/LogoMinhasViagens.png")}
      />

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
          style={{ borderRadius: 10 }}
        >
          <ContainerRota>
            <ContentRota>
              <Rota>Origem</Rota>
              <Lugar>São Paulo</Lugar>
            </ContentRota>

            <Image source={require("../../assets/images/mini-aviao.png")} />

            <ContentRota>
              <Rota>Destino</Rota>
              <Lugar>Roma</Lugar>
            </ContentRota>
          </ContainerRota>
        </Shadow>
      </Shadow>

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
          style={{ borderRadius: 10 }}
        >
          <Checklist>
            <TitleViagens>Rotina da viagem</TitleViagens>

            <FlatList
              data={checklist}
              renderItem={({ item }) => (
                <ContentCheck>
                  <Check>
                    {item.status === 0 ? null : (
                      <IconCheck
                        source={require("../../assets/images/check.png")}
                      />
                    )}
                  </Check>
                  <TitleViagens>Visitar o coliseu</TitleViagens>
                </ContentCheck>
              )}
            />
          </Checklist>
        </Shadow>
      </Shadow>

      {
        route.params.type === 'acompanhar' ? <Shadow
          startColor="#000"
          endColor="#000"
          distance={0}
          offset={[2.5, 2.5]}
          containerStyle={{ marginBottom: 10 }}
        >
          <ButtonViagem style={{ backgroundColor: "#8531C6" }}>
            <TextButtonViagem style={{ color: "#fff" }}>
              finalizar viagem
            </TextButtonViagem>
          </ButtonViagem>
        </Shadow>

          :

          route.params.type === 'historico' ? <Shadow
            startColor="#000"
            endColor="#000"
            distance={0}
            offset={[2.5, 2.5]}
            containerStyle={{ marginBottom: 10 }}
          >
            <ButtonViagem style={{ backgroundColor: "#8531C6" }}>
              <TextButtonViagem style={{ color: "#fff" }}>
                Adicionar post
              </TextButtonViagem>
            </ButtonViagem>
          </Shadow>

            :

            <Shadow
              startColor="#000"
              endColor="#000"
              distance={0}
              offset={[2.5, 2.5]}
              containerStyle={{ marginBottom: 10 }}
            >
              <ButtonViagem style={{ backgroundColor: "#8531C6" }}>
                <TextButtonViagem style={{ color: "#fff" }}>
                  Iniciar viagem
                </TextButtonViagem>
              </ButtonViagem>
            </Shadow>
      }


    </Container>
  );
};
