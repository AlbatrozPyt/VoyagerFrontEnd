import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
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

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Back } from "../../components/Button";
import { MinhasViagens } from "../../components/Logo/Logo";
import { ContainerShadowViagens, ShadowDefault } from "../../components/Shadow";

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
      <Back navigation={navigation} />

      <MinhasViagens />

      <ContainerShadowViagens
        render={
          <ContainerRota>
            <ContentRota>
              <Rota>Origem</Rota>
              <Lugar>São Paulo</Lugar>
            </ContentRota>

            <MaterialCommunityIcons name="airplane" size={40} color="black" />

            <ContentRota>
              <Rota>Destino</Rota>
              <Lugar>Roma</Lugar>
            </ContentRota>
          </ContainerRota>
        }
      />

      <ContainerShadowViagens
        render={
          <Checklist>
            <TitleViagens>Rotina da viagem</TitleViagens>

            <FlatList
              data={checklist}
              renderItem={({ item }) => (
                <ContentCheck>
                  <Check>
                    {item.status === 0 ? null : (
                      <MaterialCommunityIcons
                        name="check-bold"
                        size={20}
                        color="yellowgreen"
                      />
                    )}
                  </Check>
                  <TitleViagens>Visitar o coliseu</TitleViagens>
                </ContentCheck>
              )}
            />
          </Checklist>
        }
      />

      {route.params !== undefined ? (
        route.params.type === "acompanhar" ? (
          <ShadowDefault
            render={
              <ButtonViagem bgColor={"#8531C6"}>
                <TextButtonViagem style={{ color: "#fff" }}>
                  finalizar viagem
                </TextButtonViagem>
              </ButtonViagem>
            }
          />
        ) : route.params.type === "historico" ? (
          <ShadowDefault
            render={
              <ButtonViagem
                onPress={() => navigation.navigate(`CriarPost`)}
                bgColor={"#8531C6"}
              >
                <TextButtonViagem style={{ color: "#fff" }}>
                  Adicionar post
                </TextButtonViagem>
              </ButtonViagem>
            }
          />
        ) : (
          <ShadowDefaut
            render={
              <ButtonViagem bgColor={"#8531C6"}>
                <TextButtonViagem style={{ color: "#fff" }}>
                  Iniciar viagem
                </TextButtonViagem>
              </ButtonViagem>
            }
          />
        )
      ) : null}
    </Container>
  );
};
