import { TouchableOpacity } from "react-native";
import { ContainerAtividade, TitleAtividade } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";
import { TitleDefault } from "../Text/style";
import moment from "moment";
import { mask } from "remask";

export const Atividade = ({ text, dataHora, onPress }) => {
  return (
    <Shadow
      startColor="#000"
      endColor="#000"
      distance={0}
      offset={[4, 6]}
      containerStyle={{ marginBottom: 20, width: 344 }}
    >
      <ContainerAtividade>
        <TitleAtividade>{(text).substr(0, 50)}</TitleAtividade>

        <TitleDefault
          style={{ fontSize: 16 }}
        >
          {/* {mask(dataHora, '99/99 às 99:99')} */}
          {moment(dataHora).format("DD/MM") + " às " + moment(dataHora).format("HH:mm")}
        </TitleDefault>

        <TouchableOpacity onPress={onPress} style={{position: "absolute", right: 8, top: "25%"}}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      </ContainerAtividade>
    </Shadow>
  );
};
