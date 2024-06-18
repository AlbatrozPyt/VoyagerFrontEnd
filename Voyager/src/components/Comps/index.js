import { Shadow } from "react-native-shadow-2";
import {
  ButtonCadastrarViagem,
  InputCadastarViagem,
  LabelButtonViagem,
} from "./style";
import { Text, View } from "react-native";
import { ShadowDefault } from "../Shadow";

export const InputViagem = ({ placeholder, onChangeText, value }) => {
  return (
    <ShadowDefault
      render={
        <InputCadastarViagem
          placeholder={placeholder}
          placeholderTextColor={`#BA31C6`}
          onChangeText={onChangeText}
          value={value}
        />
      }
    />
  );
};

export const ButtonViagemDate = ({ setState, value, labelButton }) => {
  return (
    <View>
      <LabelButtonViagem>{labelButton}</LabelButtonViagem>

      <ShadowDefault
        render={
          <ButtonCadastrarViagem onPress={() => setState(true)}>
            <Text>{value}</Text>
          </ButtonCadastrarViagem>
        }
      />
    </View>
  );
};
