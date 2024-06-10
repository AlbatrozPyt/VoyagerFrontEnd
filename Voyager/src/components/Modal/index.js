import { FlatList, Modal, View } from "react-native";
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
import { Shadow } from "react-native-shadow-2";
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

export const ModalRotina = ({ visible, setVisible }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <BackgroundModalRotina>
        <ContainerModalRotina>
          <View style={{ margin: 20 }}>
            <LabelModalRotina>Adicionar tarefa</LabelModalRotina>

            <ShadowDefault render={<InputRotina placeholder={``} />} />
          </View>

          <View style={{ margin: 20 }}>
            <LabelModalRotina>Data e hora</LabelModalRotina>

            <ShadowDefault render={<InputRotina placeholder={``} />} />
          </View>

          <ShadowButton3
            render={
              <ButtonModalRotina onPress={() => setVisible(false)}>
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
  comments,
  post,
  setIdPostSelecionado
}) => {

  const [comentario, setComentario] = useState(null)

  async function PostComment() {
    await api.post('/Comentarios', {
      idPostagem: post.id,
      idUsuario: post.viagem.idUsuario,
      comentarioTexto: comentario
    })
      .then((e) => console.log(e.data))
      .catch((e) => console.log(e))
  }


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
              />
            }
          />

          <View style={{ marginTop: 20 }}>
            <ShadowDefault
              render={
                <ButtonViagem
                  bgColor={"#8531C6"}
                  onPress={() => PostComment()}
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
                  onPress={() => setVisible(false)}
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
