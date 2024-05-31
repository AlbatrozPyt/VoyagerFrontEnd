import { ScrollView, TouchableOpacity } from "react-native";
import { Container } from "../../components/Container/style";
import {
  About,
  BoxDescription,
  Description,
  IconBack,
  ImageGaleria,
  TitlePost,
} from "./style";
import { Shadow } from "react-native-shadow-2";

export const ViewPost = ({ route, navigation }) => {
  console.log(route);

  return (
    <Container>
      <TouchableOpacity
        style={{ width: "100%" }}
        onPress={() => navigation.replace("main")}
      >
        <IconBack source={require("../../assets/images/back.png")} />
      </TouchableOpacity>

      <TitlePost>{route.params.post.title}</TitlePost>

      <BoxDescription>
        <About>Sobre a minha viagem:</About>

        <Description>{route.params.post.description}</Description>
      </BoxDescription>

      <TitlePost>Fotos</TitlePost>

      <ImageGaleria
        source={require("../../assets/images/FotoViagemFeed.png")}
      />
    </Container>
  );
};
