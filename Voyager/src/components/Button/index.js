import { ButtonBack } from "./style";
import { AntDesign } from "@expo/vector-icons";

export const Back = ({navigation, screen}) => {
  return (
    <ButtonBack
      onPress={() => navigation.navigate(screen)}
    >
      <AntDesign name="back" size={40} color="black" />
    </ButtonBack>
  );
};
