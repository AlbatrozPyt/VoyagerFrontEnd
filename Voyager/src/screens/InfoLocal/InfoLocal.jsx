import { StatusBar } from "react-native";
import { TitleDefault } from "../../components/Text/style";
import { ContainerInfoLocal, LocalMapBox, TitleInfoLocal } from "./style";

export const InfoLocal = ({ navigation, route }) => {
  return (
    <ContainerInfoLocal>
      <StatusBar barStyle={"dark-content"} translucent={true} backgroundColor={"#8531C6"} />

      <LocalMapBox>
        <TitleDefault>Componente de Mapa da Expo</TitleDefault>
      </LocalMapBox>

      <TitleInfoLocal>Nome do Local</TitleInfoLocal>
    </ContainerInfoLocal>
  );
};