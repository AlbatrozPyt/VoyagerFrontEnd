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

import api from "../../service/Service";
import { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/MyContext";
import { useFocusEffect } from "@react-navigation/native";
import moment from "moment";
import { CompartilharViagemModal, ModalInformativo, ViagemIniciadaModal } from "../../components/Modal";
import {MostrarModal} from "../../utils/MostrarModal"

export const ViagemAtual = ({ navigation, route }) => {
  const [dadosViagem, setDadosViagem] = useState(null)
  const [listaAtividades, setListaAtividades] = useState(null)
  const {user} = useContext(UserContext);

  const [postagemViagem, setPostagemViagem] = useState(null)
  const [viagemPossuiPostagem, setViagemPossuiPostagem] = useState(true)

  const [mensagemModal, setMensagemModal] = useState("")
  const [showModalMensagem, setShowModalMensagem] = useState(false)

  const [showModalPostagem, setShowModalPostagem] = useState(false)
  const [showModalIniciada, setShowModalIniciada] = useState(false)

  const BuscarDadosViagem = async () => {
    await api.get(`/Viagens/${route.params.idViagem}`)
      .then(response => {
        setDadosViagem(response.data)
        BuscarAtividadesViagem(route.params.idViagem)
        BuscarPostagemViagemAtual()
      })
      .catch(erro => {
        alert(erro)
        console.log(erro);
      })   
  }

  const BuscarPostagemViagemAtual = async () => {
    console.log("Chegou");
    await api.get(`/PostagensViagens/BuscarPorViagem/${route.params.idViagem}`).then(postagem => { 
      setPostagemViagem(postagem.data)
      console.log(postagem.data);
      console.log();
      setViagemPossuiPostagem(true)
      console.log("fez a requisição");
    })
    .catch(erro => {
      if(erro.response.status === 404){
        setViagemPossuiPostagem(false)
        console.log("caiu aqui");
        console.log(route.params.idViagem);
      }
    })
  }

  const BuscarAtividadesViagem = async (idViagem) => {
    await api.get(`/Atividades/${idViagem}`)
      .then(retornoApi => {
        setListaAtividades(retornoApi.data)
      })
      .catch(erro => {
        alert(erro)
        console.log(erro);
      })
  }

  const MarcarStatusAtividade = async (idAtividade) => {
    await api.put(`/Atividades/AtualizarStatusAtividade?idAtividade=${idAtividade}`)
    .then(() => {
      BuscarAtividadesViagem(route.params.idViagem)
    }).catch(erro => {
      MostrarModal("Ocorreu um erro ao tentar iniciar a viagem. Tente novamente mais tarde", setShowModalMensagem, setMensagemModal)
    })
  }

  const FinalizarViagem = async (idViagem) => {
    await api.put(`/StatusViagens/FinalizarViagem?idViagem=${idViagem}`)
    .then(() => {
      setShowModalPostagem(true)
    })
    .catch(erro => {
      MostrarModal("Ocorreu um erro ao tentar finalizar a viagem. Tente novamente mais tarde", setShowModalMensagem, setMensagemModal)
    })
  }

  const IniciarViagem = async (idViagem) => {
    await api.put(`/StatusViagens/IniciarViagem?idViagem=${idViagem}&idUsuario=${user.jti}`)
    .then(() => {
      setShowModalIniciada(true)
    })
    .catch(erro => {
      if(erro.response.status === 400){
        MostrarModal("Espere um minuto! Não é possível iniciar duas viagens ao mesmo tempo. Conclua sua viagem em andamento para se gerenciar uma nova.", setShowModalMensagem, setMensagemModal)
      }
    })
  } 

  useEffect(() => {
    BuscarDadosViagem()
  }, [route.params])

  useFocusEffect(useCallback(() => {
    BuscarDadosViagem()
  }, []))

  return dadosViagem != null ? (
    <Container>
      <Back navigation={navigation} screen={"Viagens"} />

      <MinhasViagens />

      <ContainerShadowViagens
        render={
          <ContainerRota>
            <ContentRota>
              <Rota>Origem</Rota>
              <Lugar>{dadosViagem.endereco.cidadeOrigem}</Lugar>
            </ContentRota>

            <MaterialCommunityIcons name="airplane" size={40} color="black" />

            <ContentRota>
              <Rota>Destino</Rota>
              <Lugar>{dadosViagem.endereco.cidadeDestino}</Lugar>
            </ContentRota>
          </ContainerRota>
        }
      />

      {listaAtividades != null && listaAtividades.length !== 0 ?
        <ContainerShadowViagens
          render={
            <Checklist>
              <TitleViagens>Rotina da viagem</TitleViagens>

              <FlatList
                data={listaAtividades}
                renderItem={({ item }) => (
                  <ContentCheck>
                    <Check onPress={(dadosViagem.statusViagem.status === "Pendente") ? null : () => MarcarStatusAtividade(item.id)}>
                      {item.concluida === false ? null : (
                        <MaterialCommunityIcons
                          name="check-bold"
                          size={20}
                          color="yellowgreen"
                        />
                      )}
                    </Check>
                    <TitleViagens>{item.descricaoAtividade} {'\n'} às {moment(item.dataAtividade).format("HH:mm")} dia {moment(item.dataAtividade).format("DD/MM")}</TitleViagens>
                  </ContentCheck>
                )}
              />
            </Checklist>
          }
        />
        : null}


      {route.params !== undefined ? (
        route.params.type === "acompanhar" ? (
          <ShadowDefault
            render={
              <ButtonViagem onPress={() => FinalizarViagem(dadosViagem.id)} bgColor={"#8531C6"}>
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
                onPress={viagemPossuiPostagem ? () => navigation.replace("ViewPost", { post: postagemViagem, screenBack: "Viagens" }) : () => navigation.navigate(`CriarPost`, {idViagem: dadosViagem.id})}
                bgColor={"#8531C6"}
              >
                <TextButtonViagem style={{ color: "#fff" }}>
                  {viagemPossuiPostagem ? "Visualizar" : "Adicionar"} postagem
                </TextButtonViagem>
              </ButtonViagem>
            }
          />
        ) : (
          <ShadowDefault
            render={
              <ButtonViagem bgColor={"#8531C6"} onPress={() => IniciarViagem(dadosViagem.id)}>
                <TextButtonViagem style={{ color: "#fff" }}>
                  Iniciar viagem
                </TextButtonViagem>
              </ButtonViagem>
            }
          />
        )
      ) : null}
      <ModalInformativo
        mensagem={mensagemModal}
        showModal={showModalMensagem}
        setShowModal={setShowModalMensagem}
      />

      <CompartilharViagemModal
        navigation={navigation}
        visible={showModalPostagem}
        setVisible={setShowModalPostagem}
        idViagem={dadosViagem.id}
      />

      <ViagemIniciadaModal
        navigation={navigation}
        visible={showModalIniciada}
      />
    </Container>
  ) : <></>;
};
