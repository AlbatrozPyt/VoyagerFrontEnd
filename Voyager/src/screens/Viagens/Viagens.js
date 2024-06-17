import { Image, StatusBar, Text } from "react-native";
import { LogoViagens, NovaViagem } from "./style";
import { AcompanharViagem, PostItDefault } from "../../components/ViewViagens";
import { Shadow } from "react-native-shadow-2";
import { Container } from "../../components/container/style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MinhasViagens } from "../../components/Logo/Logo";
import { useCallback, useContext, useEffect, useState } from "react";
import api from "../../service/Service";
import { useFocusEffect } from "@react-navigation/native";
import { UserContext } from "../../contexts/MyContext";
import { CompartilharViagemModal, ModalInformativo } from "../../components/Modal";
import { MostrarModal } from "../../utils/MostrarModal";

export const Viagens = ({ navigation }) => {
  const [dadosViagemAtual, setDadosViagemAtual] = useState(null)
  const { user } = useContext(UserContext)

  const [mensagemModal, setMensagemModal] = useState("")
  const [showModalMensagem, setShowModalMensagem] = useState(false)

  const BuscarViagemAtual = async () => {
    await api.get(`/Viagens/BuscarViagemAtual/${user.jti}`)
      .then(response => {
        setDadosViagemAtual(response.data)
        console.log(dadosViagemAtual);
      })
      .catch(erro => {
        setDadosViagemAtual(null)
      })
  }

  useEffect(() => {
    BuscarViagemAtual()
  }, [user])

  useFocusEffect(useCallback(() => {
    BuscarViagemAtual()
  }, []))

  return (
    <Container>
      <MinhasViagens />

      {/* PostIt para acompanhar a sua viagem */}
      {dadosViagemAtual != null ?
        <AcompanharViagem viagem={dadosViagemAtual} navigation={navigation} />
        :
        <PostItDefault
          title={"Acompanhar viagem"}
          description={"Inicie uma viagem futura para acompanhá-la"}
          postItColor={"#DEFF97"}
          navigation={navigation}
          screen={"AcompanharViagem"}
          onPress={() => {
            MostrarModal("Não existe nenhuma viagem em andamento, inicie uma antes!!!", setShowModalMensagem, setMensagemModal)
          }}
        />
      }

      {/* PostIt para ver o histórico de viagens*/}
      <PostItDefault
        title={"Histórico de viagens"}
        description={"Veja suas viagens que já aconteceram"}
        icon={"historico"}
        postItColor={"#F7E87B"}
        navigation={navigation}
        screen={"HistoricoViagens"}
      />

      {/* PostIt para as viagens que ainda vão acontecer */}
      <PostItDefault
        title={"Viagens futuras"}
        description={"Veja suas viagens que ainda irão acontecer"}
        icon={"futuras"}
        postItColor={"#B7FBFF"}
        navigation={navigation}
        screen={"ViagensFuturas"}
      />

      {/* Botão para criar uma nova viagem */}
      <Shadow
        startColor="#000"
        endColor="#000"
        distance={0}
        offset={[4, 4]}
        containerStyle={{ alignSelf: `flex-end`, margin: 22 }}
      >
        <NovaViagem onPress={() => navigation.navigate(`CadastrarViagem`)}>
          <MaterialCommunityIcons name="airplane-plus" size={30} color="#fff" />
        </NovaViagem>
      </Shadow>

      <ModalInformativo
        setShowModal={setShowModalMensagem}
        showModal={showModalMensagem}
        mensagem={mensagemModal}
      />
    </Container>
  );
};
