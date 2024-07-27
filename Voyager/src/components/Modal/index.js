import { FlatList, Modal, View, Text } from "react-native";
import {
  BackgroundModalRotina,
  ButtonModalRotina,
  ContainerComment,
  ContainerListComment,
  ContainerModalRotina,
  ContainerText,
  ContentComment,
  ImageComment,
  InputComment,
  InputRotina,
  LabelModalRotina,
  TextComment,
  TitleComment,
  UserComment,
} from "../../screens/CriarRotina/style";
import { TitleDefault } from "../Text/style";
import {
  ButtonViagem,
  TextButtonViagem,
} from "../../screens/ViagemAtual/style";
import {
  ShadowButton2,
  ShadowButton3,
  ShadowDefault,
  ShadowDefault2,
  ShadowOpacity,
} from "../Shadow";
import api from "../../service/Service";
import { useEffect, useState } from "react";
import { ButtonModal, ButtonModalBox, ContainerCalendar, ContainerModalCompartilhar, TextModal, TitleCompartilhar } from "./style";
import { CalendarMaximized } from "../Calendar/Calendar";
import { mask } from "remask";
import moment from "moment";
import { Shadow } from "react-native-shadow-2";
import { MostrarModal } from "../../utils/MostrarModal";

export const ModalRotina = ({
  visible,
  setVisible,
  descricao,
  setDescricao,
  dataHora,
  setDataHora,
  tarefas,
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <BackgroundModalRotina>
        <ContainerModalRotina>
          <View style={{ margin: 20 }}>
            <LabelModalRotina>Descrição</LabelModalRotina>

            <ShadowDefault
              render={
                <InputRotina
                  placeholder={``}
                  multiline={true}
                  onChangeText={(txt) => setDescricao(txt)}
                />
              }
            />
          </View>

          <View style={{ margin: 20 }}>
            <LabelModalRotina>Data e hora</LabelModalRotina>

            <ShadowDefault
              render={
                <InputRotina
                  placeholder={`DD/MM/AAAA HH:mm`}
                  onChangeText={(txt) => setDataHora(mask(txt, '99/99/9999 99:99'))}
                  keyboardType={"numeric"}
                  value={dataHora}
                />
              }
            />
          </View>

          <ShadowButton3
            render={
              <ButtonModalRotina
                onPress={() => {
                  setVisible(false)
                  tarefas.push({
                    descricao: descricao,
                    data: moment(dataHora, "DD/MM/YYYY HH:mm").format("YYYY-MM-DDTHH:mm:ss")
                  })
                  setDescricao(null)
                  setDataHora(null)
                }}
              >
                <TitleDefault style={{ color: `#8531C6` }}>
                  adicionar
                </TitleDefault>
              </ButtonModalRotina>
            }
          />

          <ShadowDefault2
            render={
              <ButtonModalRotina
                onPress={() => setVisible(false)}
                style={{ backgroundColor: `#8531C6` }}
              >
                <TitleDefault style={{ color: `#fff` }}>voltar</TitleDefault>
              </ButtonModalRotina>
            }
          />
        </ContainerModalRotina>
      </BackgroundModalRotina>
    </Modal>
  );
};


export const ModalComentario = ({
  visible,
  setVisible,
  post,
  setPost,
  user
}) => {

  const [comentario, setComentario] = useState(null)
  const [comments, setComments] = useState(null)


  async function PostComment(postId, userId) {
    await api.post('/Comentarios', {
      idPostagem: postId,
      idUsuario: userId,
      comentarioTexto: comentario,
      dataComentario: moment().format('YYYY-MM-DDTHH:mm:ss')
    })
      .then((e) => {
        console.log('Post comentado')
        setComentario(null)
      })
      .catch((e) => console.log(e))
  }

  async function GetComments(post) {
    await api.get(`/Comentarios/${post.id}`)
      .then((e) => {
        setComments(e.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    if (post !== null) {
      GetComments(post)
    }
  }, [])

  useEffect(() => {
    if (post !== null) {
      GetComments(post)
    }
  }, [comentario, post])


  return (
    <Modal animationType="fade" visible={visible} transparent={true}>
      <BackgroundModalRotina>
        <ContainerComment>
          <TitleComment>Comentários</TitleComment>

          <ContainerListComment>
            <FlatList
              data={comments}
              renderItem={({ item }) => (
                <ContentComment>
                  <ShadowOpacity
                    render={
                      <ImageComment
                        source={{
                          uri: item.usuario.foto,
                        }}
                      />
                    }
                  />

                  <ContainerText>
                    <UserComment>{item.usuario.nome}</UserComment>

                    <TextComment>
                      {item.comentarioTexto}
                    </TextComment>
                  </ContainerText>
                </ContentComment>
              )}
            />
          </ContainerListComment>

          <ShadowDefault
            render={
              <InputComment
                placeholder={`Comentar...`}
                multiline={true}
                onChangeText={(txt) => setComentario(txt)}
                value={comentario}
              />
            }
          />

          <View style={{ marginTop: 20 }}>
            <ShadowDefault
              render={
                <ButtonViagem
                  bgColor={"#8531C6"}
                  onPress={() => {
                    PostComment(post.id, user.jti)
                  }}
                >
                  <TextButtonViagem style={{ color: `#fff` }}>
                    Adicionar Comentário
                  </TextButtonViagem>
                </ButtonViagem>
              }
            />

            <ShadowDefault
              render={
                <ButtonViagem
                  bgColor={"#8531C6"}
                  onPress={() => {
                    setPost(null)
                    setVisible(false)
                  }}
                >
                  <TextButtonViagem style={{ color: `#fff` }}>
                    Voltar
                  </TextButtonViagem>
                </ButtonViagem>
              }
            />
          </View>
        </ContainerComment>
      </BackgroundModalRotina>
    </Modal>
  );
};

export const ModalCalendar = ({ visible, setVisible, date, setDate}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <BackgroundModalRotina>
        <ContainerCalendar>
          <CalendarMaximized data={date} setData={setDate} />

          <ShadowDefault
            render={
              <ButtonViagem
                bgColor={`#8531c6`}
                style={{ width: 200 }}
                onPress={() => { setVisible(false) }}
              >
                <TextButtonViagem style={{ color: '#fff' }}>Selecionar</TextButtonViagem>
              </ButtonViagem>
            }
          />

          <ShadowDefault
            render={
              <ButtonViagem
                style={{ width: 200 }}
                onPress={() => {
                  setVisible(false)
                  setDate(null)
                }}
              >
                <TextButtonViagem>Cancelar</TextButtonViagem>
              </ButtonViagem>
            }
          />

        </ContainerCalendar>
      </BackgroundModalRotina>
    </Modal>
  )
}

export const CompartilharViagemModal = ({ navigation, visible, setVisible = null, idViagem }) => {
  const HandleCompartilhar = () => {
    setVisible(false)
    navigation.navigate("CriarPost", { idViagem: idViagem })
  }

  return (
    <Modal animationType="fade" visible={visible} transparent={true}>
      <BackgroundModalRotina>
        <ContainerModalCompartilhar>
          <TitleCompartilhar>Compartilhe sua viagem!</TitleCompartilhar>

          <TextModal>Seu post é muito importante para nós, compartilhe a foto com seus amigos e todos passageiros da voyager.</TextModal>

          <ButtonModalBox>
            <ShadowButton3
              render={
                <ButtonModal onPress={() => HandleCompartilhar()}>
                  <TitleDefault style={{ color: `#8531C6` }}>
                    compartilhar
                  </TitleDefault>
                </ButtonModal>
              }
            />

            <Shadow
              startColor="#000"
              endColor="#000"
              distance={0}
              offset={[4, 4]}
              containerStyle={{ margin: 10, width: 250 }}
            >
              <ButtonModal
                onPress={() => navigation.replace("main", { screen: "Viagens" })}
                style={{ backgroundColor: `#8531C6`, display: "flex", justifyContent: "center", alignItems: "center" }}
              >
                <TitleDefault style={{ color: `#fff` }}>voltar</TitleDefault>
              </ButtonModal>
            </Shadow>
          </ButtonModalBox>
        </ContainerModalCompartilhar>
      </BackgroundModalRotina>
    </Modal>
  )
}

export const ViagemIniciadaModal = ({ navigation, visible }) => {
  return (
    <Modal animationType="fade" visible={visible} transparent={true}>
      <BackgroundModalRotina>
        <ContainerModalCompartilhar>
          <TitleCompartilhar>Viagem Iniciada!</TitleCompartilhar>

          <TextModal>Acompanhe sua jornada pelo aplicativo e tenha acesso a todas as informações e recursos para tornar sua experiência ainda mais completa. Aproveite sua viagem com a Voyager!</TextModal>

          <ButtonModalBox>
            <ShadowButton3
              render={
                <ButtonModal onPress={() => navigation.replace("main", { screen: "Viagens" })}>
                  <TitleDefault style={{ color: `#8531C6` }}>
                    Confirmar
                  </TitleDefault>
                </ButtonModal>
              }
            />
          </ButtonModalBox>
        </ContainerModalCompartilhar>
      </BackgroundModalRotina>
    </Modal>
  )
}

export const ModalInformativo = ({ showModal, setShowModal, mensagem }) => {
  return (
    <Modal animationType="fade" visible={showModal} transparent={true}>
      <BackgroundModalRotina>
        <ContainerModalCompartilhar>
          <TitleCompartilhar>Aviso!!!</TitleCompartilhar>

          <TextModal>{mensagem}</TextModal>

          <ButtonModalBox>
            <ShadowButton3
              render={
                <ButtonModal onPress={() => setShowModal(false)}>
                  <TitleDefault style={{ color: `#8531C6` }}>
                    Prosseguir
                  </TitleDefault>
                </ButtonModal>
              }
            />
          </ButtonModalBox>
        </ContainerModalCompartilhar>
      </BackgroundModalRotina>
    </Modal>
  )
}