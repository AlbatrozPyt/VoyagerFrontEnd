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
import { useState } from "react";
import { ModalRotina } from "../../components/Modal";
import { ShadowDefault } from "../../components/Shadow";

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

export const CriarRotina = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <TitleRotina>crie sua rotina</TitleRotina>

      <View style={{ height: 300 }}>
        <FlatList data={data} renderItem={() => <Atividade />} />
      </View>

      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={{ width: "80%", alignItems: "flex-end" }}
      >
        <ButtonAddAtividade>+ Adicionar tarefa</ButtonAddAtividade>
      </TouchableOpacity>

      <View style={{ marginTop: 40 }}>
        <ShadowDefault
          render={
            <ButtonViagem
              onPress={() =>
                navigation.navigate("ViagemAtual", { type: `acompanhar` })
              }
              bgColor={"#8531C6"}
            >
              <TextButtonViagem style={{ color: "#fff" }}>
                Continuar
              </TextButtonViagem>
            </ButtonViagem>
          }
        />
      </View>

      <AboutGemini>
        Experimete usar{" "}
        <AboutGeminiDashed> Nossa IA parceira!</AboutGeminiDashed>
      </AboutGemini>

      <Image
        width={106}
        height={39}
        source={{
          uri: `https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/gemini-logo.png?raw=true`,
        }}
      />

      <ModalRotina visible={visible} setVisible={setVisible} />
    </Container>
  );
};
