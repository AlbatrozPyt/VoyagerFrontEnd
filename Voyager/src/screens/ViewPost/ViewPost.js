import { ScrollView, StatusBar, TouchableOpacity, View } from "react-native";
import { Container } from "../../components/container/style";
import {
  About,
  BoxDescription,
  Description,
  IconBack,
  ImageGaleria,
  TitlePost,
} from "./style";
import { Shadow } from "react-native-shadow-2";
import { Back } from "../../components/Button";

export const ViewPost = ({ route, navigation }) => {
  console.log(route);

  return (
    <ScrollView style={{ width: "100%" }}>
      <StatusBar backgroundColor={"#8531C6"} />

      <Container>
        <View style={{ width: "100%", height: 20 , marginBottom: 50}}>
          <Back navigation={navigation} screen={'main'}/>
        </View>

        <TitlePost>{route.params.post.titulo}</TitlePost>

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

              <Description>{route.params.post.descricao}</Description>
            </BoxDescription>
          </Shadow>
        </Shadow>

        <TitlePost>Fotos</TitlePost>

        {/* Fotos tiradas */}
        {[0, 1, 2].map((x) => {
          return (
            <Shadow
              key={x}
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
                  key={x}
                  source={{
                    uri: `https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/FotoViagemFeed.png?raw=true`,
                  }}
                />
              </Shadow>
            </Shadow>
          );
        })}
      </Container>
    </ScrollView>
  );
};
