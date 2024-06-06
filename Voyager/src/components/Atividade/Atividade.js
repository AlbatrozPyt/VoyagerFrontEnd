import { TouchableOpacity } from "react-native";
import { ContainerAtividade, TitleAtividade } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";

export const Atividade = ({ text }) => {
  return (
    <Shadow
      startColor="#000"
      endColor="#000"
      distance={0}
      offset={[4, 6]}
      containerStyle={{ marginBottom: 20, width: 344 }}
    >
      <ContainerAtividade>
        <TitleAtividade>Test</TitleAtividade>

        <TouchableOpacity>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      </ContainerAtividade>
    </Shadow>
  );
};
