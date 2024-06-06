import { Shadow } from 'react-native-shadow-2'
import { Container } from '../../components/container/style'
import { ContainerEditPhoto, ContainerInputsPerfil, ContentEdit, InputBio, InputPerfil, LabelPerfil, TakePicture, TopImageEdit, UserImage } from './style'
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, View } from 'react-native';
import { ButtonModalRotina } from '../CriarRotina/style';
import { TitleDefault } from '../../components/Text/style';

export const EditPerfil = ({ navigation }) => {
    return (
        <ScrollView>
            <Container>
                <TopImageEdit
                    source={require(`../../assets/images/ImageTopEdit.png`)}
                />

                <ContainerEditPhoto>
                    <Shadow
                        startColor="rgba(0, 0, 0)"
                        endColor="rgba(0, 0, 0)"
                        distance={0}
                        offset={[4, 4]}
                        style={{ borderRadius: 10 }}
                    >
                        <UserImage
                            source={require(`../../assets/images/PedroBig.png`)}
                        />
                    </Shadow>

                    <Shadow
                        startColor="rgba(0, 0, 0)"
                        endColor="rgba(0, 0, 0)"
                        distance={0}
                        offset={[4, 4]}
                        containerStyle={{ position: 'absolute', left: 20, bottom: -20 }}
                    >
                        <TakePicture>
                            <MaterialIcons name="add-a-photo" size={30} color="#fff" />
                        </TakePicture>
                    </Shadow>
                </ContainerEditPhoto>

                <ContainerInputsPerfil>
                    <ContentEdit>
                        <LabelPerfil>Nome</LabelPerfil>

                        <Shadow
                            offset={[4, 2]}
                            style={{ borderRadius: 10 }}
                        >
                            <InputPerfil value={`Heitor Perrota`} />
                        </Shadow>
                    </ContentEdit>

                    <ContentEdit>
                        <LabelPerfil>Idade</LabelPerfil>

                        <Shadow
                            offset={[4, 2]}
                            style={{ borderRadius: 10 }}
                        >
                            <InputPerfil value={`18`} />
                        </Shadow>
                    </ContentEdit>

                    <ContentEdit>
                        <LabelPerfil>Sobre mim</LabelPerfil>

                        <InputBio multiline={true} value={`Sou fascinado por viajar, já rodei os 4 cantos da terra em busca de me conhecer melhor, vem com o papai kkk.`} />
                    </ContentEdit>
                </ContainerInputsPerfil>

                <Shadow
                    startColor="#8531C6"
                    endColor="#8531C6"
                    distance={0}
                    offset={[6, 6]} 
                    containerStyle={{ marginBottom: 20 }}
                >

                    <Shadow
                        startColor="#000"
                        endColor="#000"
                        distance={0}
                        offset={[2, 2]}
                    >
                        <ButtonModalRotina>
                            <TitleDefault style={{ color: `#8531C6` }}>salvar</TitleDefault>
                        </ButtonModalRotina>
                    </Shadow>
                </Shadow>

                <Shadow
                    startColor="#000"
                    endColor="#000"
                    distance={0}
                    offset={[4, 4]}
                    containerStyle={{ marginBottom: 20 }}
                >
                    <ButtonModalRotina onPress={() => navigation.navigate(`Perfil`)} style={{ backgroundColor: `#8531C6` }}>
                        <TitleDefault style={{ color: `#fff` }}>voltar</TitleDefault>
                    </ButtonModalRotina>
                </Shadow>
            </Container>
        </ScrollView>
    )
}