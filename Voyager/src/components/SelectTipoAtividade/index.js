import { Image, View } from "react-native"
import { TitleDefault } from "../Text/style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { BackgroundIcon, ContainerIconsTipo, ContainerTipoViagem, IconsTipo, TitleIcon } from "./style"

export const SelectTipoViagem = ({tipoViagem, setTipoViagem }) => {
    return (
        <ContainerTipoViagem>
            <TitleDefault style={{ textTransform: `capitalize` }}>Tipo de viagem</TitleDefault>

            <ContainerIconsTipo>
                <IconsTipo
                    onPress={() => setTipoViagem(`9fbdf547-246f-44ea-8c23-7135978bab62`)}
                >
                    <BackgroundIcon style={tipoViagem !== `9fbdf547-246f-44ea-8c23-7135978bab62` && {backgroundColor: `#8531C660`}}>
                        <MaterialCommunityIcons name="popcorn" size={20} color="#fff" />
                    </BackgroundIcon>
                    <TitleIcon>Lazer</TitleIcon>
                </IconsTipo>

                <IconsTipo
                    onPress={() => setTipoViagem(`5e06720d-a2a2-418d-9597-41af394d7f76`)}
                >
                    <BackgroundIcon style={tipoViagem !== `5e06720d-a2a2-418d-9597-41af394d7f76` && {backgroundColor: `#8531C660`}} >
                        <FontAwesome name="suitcase" size={20} color="#fff" />
                    </BackgroundIcon>
                    <TitleIcon>Trabalho</TitleIcon>
                </IconsTipo>

                <IconsTipo
                    onPress={() => setTipoViagem(`b4d1fc7e-db23-48e4-9e11-179f70515d4e`)}
                >
                    <BackgroundIcon style={tipoViagem !== `b4d1fc7e-db23-48e4-9e11-179f70515d4e` && {backgroundColor: `#8531C660`}}>
                        <MaterialIcons name="family-restroom" size={20} color="#fff" />
                    </BackgroundIcon>
                    <TitleIcon>Familia</TitleIcon>
                </IconsTipo>
            </ContainerIconsTipo>


        </ContainerTipoViagem>
    )
}