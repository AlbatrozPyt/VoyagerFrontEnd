import { FlatList, Image, ScrollView } from "react-native";
import { Container } from "../../components/Container/style";
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

export const ViagemAtual = () => {
  return (
    <Container>
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

      <Shadow
        startColor="#000"
        endColor="#000"
        distance={0}
        offset={[2.5, 2.5]}
        containerStyle={{marginBottom: 30}}
      >
        <ButtonViagem>
          <TextButtonViagem>feedback viagem</TextButtonViagem>
        </ButtonViagem>
      </Shadow>

      <Shadow
        startColor="#000"
        endColor="#000"
        distance={0}
        offset={[2.5, 2.5]}
      >
        <ButtonViagem style={{ backgroundColor: "#8531C6" }}>
          <TextButtonViagem style={{ color: "#fff" }}>
            criar post da viagem
          </TextButtonViagem>
        </ButtonViagem>
      </Shadow>
    </Container>
  );
};
