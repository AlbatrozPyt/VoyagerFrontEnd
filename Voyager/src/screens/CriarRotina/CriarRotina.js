import { Shadow } from "react-native-shadow-2";
import { Atividade } from "../../components/Atividade/Atividade";
import { Container } from "../../components/container/style";
import {
  AboutGemini,
  AboutGeminiDashed,
  BackgroundModalRotina,
  ButtonAddAtividade,
  ButtonModalRotina,
  ContainerModalRotina,
  InputRotina,
  LabelModalRotina,
  TitleRotina,
} from "./style";
import { FlatList, Image, Modal, TouchableOpacity, View } from "react-native";
import moment from "moment";
import { ButtonViagem, TextButtonViagem } from "../ViagemAtual/style";
import { InputViagem } from "../../components/Comps";
import { useState } from "react";
import { TitleDefault } from "../../components/Text/style";
import { ModalRotina } from "../../components/Modal";

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

export const CriarRotina = ({navigation}) => {

  const [visible, setVisible] = useState(false)

  return (
    <Container>
      <TitleRotina>crie sua rotina</TitleRotina>

      <Atividade />
      <Atividade />
      <Atividade />

      <TouchableOpacity onPress={() => setVisible(true)} style={{ width: "80%", alignItems: "flex-end" }}>
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
          onPress={() => navigation.navigate("ViagemAtual", {type: `acompanhar`})}
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

      <ModalRotina visible={visible} setVisible={setVisible}/>

    </Container>
  );
};
