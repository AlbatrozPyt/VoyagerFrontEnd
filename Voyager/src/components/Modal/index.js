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

export const ModalComentario = ({ visible, setVisible }) => {
  return (
    <Modal animationType="fade" visible={visible} transparent={true}>
      <BackgroundModalRotina>
        <ContainerComment>
          <TitleComment>Comentários</TitleComment>

          <ContainerListComment>
            <FlatList
              data={[0, 1, 2]}
              renderItem={() => (
                <ContentComment>
                  <ShadowOpacity
                    render={
                      <ImageComment
                        source={{
                          uri: "https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/pedro-comment.png?raw=true",
                        }}
                      />
                    }
                  />

                  <ContainerText>
                    <UserComment>Junior</UserComment>

                    <TextComment>
                      Esse é o melhor Lorem Ipsum da minha vida, que experiência
                      incrível, oh my god.
                    </TextComment>
                  </ContainerText>
                </ContentComment>
              )}
            />
          </ContainerListComment>

          <ShadowDefault
            render={
              <InputComment placeholder={`Comentar...`} multiline={true} />
            }
          />

          <View style={{ marginTop: 20 }}>
            <ShadowDefault
              render={
                <ButtonViagem bgColor={"#8531C6"}>
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
