import { Shadow } from "react-native-shadow-2";
import { Atividade } from "../../components/Atividade/Atividade";
import { Container } from "../../components/container/style";
import {
  AboutGemini,
  AboutGeminiDashed,
  ButtonAddAtividade,
  TitleRotina,
} from "./style";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import moment from "moment";
import { ButtonViagem, TextButtonViagem } from "../ViagemAtual/style";

const data = [
  {
    txt: "Ver os gansos",
    time: moment(new Date()).format("HH:mm"),
  },
  {
    txt: "Comer pizza",
    time: moment(new Date()).format("HH:mm"),
  },
  {
    txt: "Pescar",
    time: moment(new Date()).format("HH:mm"),
  },
  {
    txt: "Ver os gansos",
    time: moment(new Date()).format("HH:mm"),
  },
  {
    txt: "Comer pizza",
    time: moment(new Date()).format("HH:mm"),
  },
  {
    txt: "Pescar",
    time: moment(new Date()).format("HH:mm"),
  },
];

export const CriarRotina = () => {
  return (
    <Container>
      <TitleRotina>crie sua rotina</TitleRotina>

      <Atividade />
      <Atividade />
      <Atividade />

      <TouchableOpacity style={{ width: "80%", alignItems: "flex-end" }}>
        <ButtonAddAtividade>+ Adicionar tarefa</ButtonAddAtividade>
      </TouchableOpacity>

      <Shadow
        startColor="#000"
        endColor="#000"
        distance={0}
        offset={[2.5, 2.5]}
        containerStyle={{ marginTop: 40 }}
      >
        <ButtonViagem
          onPress={() => navigation.navigate("CriarRotina")}
          style={{ backgroundColor: "#8531C6" }}
        >
          <TextButtonViagem style={{ color: "#fff" }}>
            Continuar
          </TextButtonViagem>
        </ButtonViagem>
      </Shadow>

      <AboutGemini>
        Experimete usar{" "}
        <AboutGeminiDashed> Nossa IA parceira!</AboutGeminiDashed>
      </AboutGemini>

      <Image
        source={require('../../assets/images/gemini-logo.png')}
      />
    </Container>
  );
};
