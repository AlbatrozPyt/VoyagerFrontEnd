import { ScrollView, StatusBar, TouchableOpacity } from "react-native";
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
    <ScrollView style={{ width: "100%" }}>
      <StatusBar backgroundColor={"#8531C6"} />

      <Container>
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => navigation.replace("main")}
        >
          <IconBack source={require("../../assets/images/back.png")} />
        </TouchableOpacity>
        <TitlePost>{route.params.post.title}</TitlePost>

        <Shadow
          startColor="#8531C6"
          endColor="#8531C6"
          distance={0}
          offset={[8, 8]}
          style={{ borderRadius: 10 }}
        >
          <Shadow
            startColor="#000"
            endColor="#000"
            distance={0}
            offset={[2.5, 2.5]}
            style={{ borderRadius: 10 }}
          >
            <BoxDescription>
              <About>Sobre a minha viagem:</About>

              <Description>{route.params.post.description}</Description>
            </BoxDescription>
          </Shadow>
        </Shadow>

        <TitlePost>Fotos</TitlePost>

        {/* Fotos tiradas */}
        {[0, 1, 2].map(() => {
          return (
            <Shadow
              startColor="#8531C6"
              endColor="#8531C6"
              distance={0}
              offset={[8, 8]}
            >
              <Shadow
                startColor="#000"
                endColor="#000"
                distance={0}
                offset={[2.5, 2.5]}
                style={{
                  borderRadius: 10,
                  height: 195,
                  marginBottom: 20,
                }}
              >
                <ImageGaleria
                  source={require("../../assets/images/FotoViagemFeed.png")}
                />
              </Shadow>
            </Shadow>
          );
        })}
      </Container>
    </ScrollView>
  );
};
