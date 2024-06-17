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
import { useContext, useEffect, useState } from "react";
import { ModalRotina } from "../../components/Modal";
import { ShadowDefault } from "../../components/Shadow";
import api from "../../service/Service";
import { UserContext } from "../../contexts/MyContext";



export const CriarRotina = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);

  const [descricao, setDescricao] = useState(null)
  const [dataHora, setDataHora] = useState(null)
  const [idViagem, setIdViagem] = useState(null)

  const [dep, setDep] = useState(null)

  const { user } = useContext(UserContext)


  async function PostChecklist(id) {
    await api.post(`/Atividades/${id}`, data)
      .then(() => {
        console.log(`Checklist adicionado`)
        navigation.navigate(`Viagens`)
      })
      .catch(() => {
        console.log(`Erro ao cadastrar o checklist`)
      })
  }


  async function PostViagem() {
    await api.post(`/Viagens`, {
      dataInicial: route.params.dataInicial,
      dataFinal: route.params.dataFinal,
      paisOrigem: route.params.paisOrigem,
      cidadeOrigem: route.params.cidadeOrigem,
      paisDestino: route.params.paisDestino,
      cidadeDestino: route.params.cidadeDestino,
      idTipoViagem: route.params.idTipoViagem,
      idUsuario: user.jti
    })
      .then((e) => {
        PostChecklist(e.data)
      })
      .catch(() => {
        console.log(`Erro ao cadastrar`)
      })
  }

  useEffect(() => {
    console.log(data)
  }, [dep, data])

  return (
    <Container>
      <TitleRotina>crie a rotina da sua viagem</TitleRotina>

      <View style={{ height: 300 }}>
        <FlatList
          data={data}
          renderItem={
            ({ item, index }) => item !== null ?
              <Atividade
                text={item.descricao}
                dataHora={item.data}
                onPress={() => {
                  setDep(item)
                  data.splice(index, 1)
                }}
              />
              : <ButtonAddAtividade>Nenhuma tarefa foi criada</ButtonAddAtividade>
          }
        />
      </View>

      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={{ width: "80%", alignItems: "center" }}
      >
        <ButtonAddAtividade>+ Adicionar tarefa</ButtonAddAtividade>
      </TouchableOpacity>

      {/* <View style={{ marginTop: 40 }}>
        <ShadowDefault
          render={
            <ButtonViagem
              onPress={() =>
                navigation.navigate("ViagemAtual", { ...route, checklist: data })
              }
              bgColor={"#8531C6"}
            >
              <TextButtonViagem style={{ color: "#fff" }}>
                Continuar
              </TextButtonViagem>
            </ButtonViagem>
          }
        />
      </View> */}

      <View style={{ marginTop: 40 }}>
        <ShadowDefault
          render={
            <ButtonViagem
              bgColor={"#8531C6"}
              onPress={() => PostViagem()}
            >
              <TextButtonViagem style={{ color: "#fff" }}>
                Salvar viagem
              </TextButtonViagem>
            </ButtonViagem>
          }
        />
      </View>

      <AboutGemini onPress={() => navigation.navigate("ChatBot", {
        dataInicial: route.params.dataInicial,
        dataFinal: route.params.dataFinal,
        paisOrigem: route.params.paisOrigem,
        cidadeOrigem: route.params.cidadeOrigem,
        paisDestino: route.params.paisDestino,
        cidadeDestino: route.params.cidadeDestino,
        idTipoViagem: route.params.idTipoViagem,
        idUsuario: user.jti
      })}>
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

      <ModalRotina
        visible={visible}
        setVisible={setVisible}
        descricao={descricao}
        setDescricao={setDescricao}
        dataHora={dataHora}
        setDataHora={setDataHora}
        tarefas={data}
      />
    </Container>
  );
};
