import { Shadow } from "react-native-shadow-2"
import { Container } from "../../components/container/style"
import { AddPicture, ImageDestaque, InputPost } from "./style"
import { MaterialIcons } from '@expo/vector-icons';

import { ButtonViagem, TextButtonViagem } from "../ViagemAtual/style";
import { ScrollView } from "react-native";


export const CriarPost = ({ navigation }) => {
    return (
        <ScrollView>
            <Container>
                <ImageDestaque
                    source={require(`../../assets/images/imageDestaque.png`)}
                />

                <Shadow
                    startColor="#000"
                    endColor="#000"
                    distance={0}
                    offset={[4, 4]}
                    containerStyle={{ margin: 40 }}
                >
                    <AddPicture>
                        <MaterialIcons name="add" size={80} color="#fff" />
                    </AddPicture>
                </Shadow>

                <Shadow
                    startColor="#000"
                    endColor="#000"
                    distance={0}
                    offset={[4, 4]}
                    containerStyle={{ marginBottom: 20 }}
                >
                    <InputPost
                        placeholder={`Título do post`}
                    />
                </Shadow>

                <Shadow
                    startColor="#000"
                    endColor="#000"
                    distance={0}
                    offset={[4, 4]}
                    containerStyle={{ marginBottom: 20 }}
                >
                    <InputPost
                        placeholder={`Comentários do post`}
                        multiline={true}
                    />
                </Shadow>

                <Shadow
                    startColor="#000"
                    endColor="#000"
                    distance={0}
                    offset={[4, 4]}
                    containerStyle={{ margin: 80 }}
                >
                    <ButtonViagem style={{ backgroundColor: `#8531C6` }} onPress={() => navigation.navigate(`CriarPost`)}>
                        <TextButtonViagem style={{ color: `#fff` }}>Postar</TextButtonViagem>
                    </ButtonViagem>
                </Shadow>
            </Container>
        </ScrollView>
    )
}