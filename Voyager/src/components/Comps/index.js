import { Shadow } from "react-native-shadow-2"
import { ButtonCadastrarViagem, InputCadastarViagem, LabelButtonViagem } from "./style"
import { Text, View } from "react-native"

export const InputViagem = ({ placeholder }) => {
    return (
        <Shadow
            startColor="#000"
            endColor="#000"
            distance={0}
            offset={[4, 4]}
        >
            <InputCadastarViagem
                placeholder={placeholder}
                placeholderTextColor={`#BA31C6`}
            />
        </Shadow>
    )
}

export const ButtonViagemDate = ({ setState, value, labelButton }) => {
    return (
        <View>
            <LabelButtonViagem>{labelButton}</LabelButtonViagem>

            <Shadow
                startColor="#000"
                endColor="#000"
                distance={0}
                offset={[4, 4]}
            >
                <ButtonCadastrarViagem onPress={() => setState(true)}>
                    <Text>{value}</Text>
                </ButtonCadastrarViagem>
            </Shadow>
        </View>
    )
}