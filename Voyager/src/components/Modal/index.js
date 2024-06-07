import { FlatList, Modal, View } from "react-native"
import { BackgroundModalRotina, ButtonModalRotina, ContainerComment, ContainerListComment, ContainerModalRotina, ContainerText, ContentComment, ImageComment, InputComment, InputRotina, LabelModalRotina, TextComment, TitleComment, UserComment } from "../../screens/CriarRotina/style"
import { Shadow } from "react-native-shadow-2"
import { TitleDefault } from "../Text/style"
import { ButtonViagem, TextButtonViagem } from "../../screens/ViagemAtual/style"

export const ModalRotina = ({ visible, setVisible }) => {
    return (
        <Modal animationType="fade" transparent={true} visible={visible}>
            <BackgroundModalRotina>
                <ContainerModalRotina>

                    <View style={{ margin: 20 }}>
                        <LabelModalRotina>Adicionar tarefa</LabelModalRotina>

                        <Shadow
                            startColor="#000"
                            endColor="#000"
                            distance={0}
                            offset={[4, 4]}
                        >
                            <InputRotina placeholder={``} />
                        </Shadow>
                    </View>

                    <View style={{ margin: 20 }}>
                        <LabelModalRotina>Data e hora</LabelModalRotina>

                        <Shadow
                            startColor="#000"
                            endColor="#000"
                            distance={0}
                            offset={[4, 4]}
                        >
                            <InputRotina placeholder={``} />
                        </Shadow>
                    </View>



                    <Shadow
                        startColor="#8531C6"
                        endColor="#8531C6"
                        distance={0}
                        offset={[6, 6]}
                        containerStyle={{ margin: 10 }}
                    >

                        <Shadow
                            startColor="#000"
                            endColor="#000"
                            distance={0}
                            offset={[2, 2]}
                        >
                            <ButtonModalRotina onPress={() => setVisible(false)}>
                                <TitleDefault style={{ color: `#8531C6` }}>adicionar</TitleDefault>
                            </ButtonModalRotina>
                        </Shadow>
                    </Shadow>


                    <Shadow
                        startColor="#000"
                        endColor="#000"
                        distance={0}
                        offset={[4, 4]}
                        containerStyle={{ margin: 10 }}
                    >
                        <ButtonModalRotina onPress={() => setVisible(false)} style={{ backgroundColor: `#8531C6` }}>
                            <TitleDefault style={{ color: `#fff` }}>voltar</TitleDefault>
                        </ButtonModalRotina>
                    </Shadow>
                </ContainerModalRotina>
            </BackgroundModalRotina>
        </Modal>
    )
}


export const ModalComentario = ({ visible, setVisible }) => {
    return (
        <Modal animationType="fade" visible={visible} transparent={true}>
            <BackgroundModalRotina>
                <ContainerComment>
                    <TitleComment>Comentários</TitleComment>

                    <ContainerListComment>

                        <FlatList
                            data={[0, 1, 2]}
                            renderItem={() =>
                                <ContentComment>
                                    <Shadow
                                        startColor="#000"
                                        endColor="#000"
                                        distance={0}
                                        offset={[2.5, 2.5]}
                                        style={{ borderRadius: 13 }}
                                    >
                                        <ImageComment
                                            source={require(`../../assets/images/pedro-comment.png`)}
                                        />
                                    </Shadow>

                                    <ContainerText>
                                        <UserComment>Junior</UserComment>

                                        <TextComment>Esse é o melhor Lorem Ipsum da minha vida, que experiência incrível, oh my god.</TextComment>
                                    </ContainerText>
                                </ContentComment>
                            }
                        />

                    </ContainerListComment>


                    <Shadow
                        startColor="#000"
                        endColor="#000"
                        distance={0}
                        offset={[2.5, 2.5]}
                        containerStyle={{ margin: 20 }}
                    >
                        <InputComment
                            placeholder={`Comentar...`}
                            multiline={true}
                        />
                    </Shadow>


                    <Shadow
                        startColor="#000"
                        endColor="#000"
                        distance={0}
                        offset={[2.5, 2.5]}
                        containerStyle={{marginBottom: 20}}
                    >
                        <ButtonViagem style={{ backgroundColor: `#8531C6` }}>
                            <TextButtonViagem style={{color: `#fff`}}>Adicionar Comentário</TextButtonViagem>
                        </ButtonViagem>
                    </Shadow>

                    <Shadow
                        startColor="#000"
                        endColor="#000"
                        distance={0}
                        offset={[2.5, 2.5]}
                    >
                        <ButtonViagem 
                            style={{ backgroundColor: `#8531C6` }}
                            onPress={() => setVisible(false)}
                        >
                            <TextButtonViagem style={{color: `#fff`}}>Voltar</TextButtonViagem>
                        </ButtonViagem>
                    </Shadow>
                </ContainerComment>
            </BackgroundModalRotina>
        </Modal>
    )
}