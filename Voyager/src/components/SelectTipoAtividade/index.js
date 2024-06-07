import { Image, View } from "react-native"
import { TitleDefault } from "../Text/style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { BackgroundIcon, ContainerIconsTipo, ContainerTipoViagem, IconsTipo, TitleIcon } from "./style"

export const SelectTipoViagem = () => {
    return (
        <ContainerTipoViagem>
            <TitleDefault style={{ textTransform: `capitalize` }}>Tipo de viagem</TitleDefault>

            <ContainerIconsTipo>
                <IconsTipo>
                    <BackgroundIcon>
                        <MaterialCommunityIcons name="popcorn" size={20} color="#fff" />
                    </BackgroundIcon>
                    <TitleIcon>Lazer</TitleIcon>
                </IconsTipo>

                <IconsTipo>
                    <BackgroundIcon>
                        <FontAwesome name="suitcase" size={20} color="#fff" />
                    </BackgroundIcon>
                    <TitleIcon>Trabalho</TitleIcon>
                </IconsTipo>

                <IconsTipo>
                    <BackgroundIcon>
                        <MaterialIcons name="family-restroom" size={20} color="#fff" />
                    </BackgroundIcon>
                    <TitleIcon>Familia</TitleIcon>
                </IconsTipo>
            </ContainerIconsTipo>

            
        </ContainerTipoViagem>
    )
}