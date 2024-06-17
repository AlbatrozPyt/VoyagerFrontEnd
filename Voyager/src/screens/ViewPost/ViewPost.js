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
import { useEffect, useState } from "react";
import api from "../../service/Service";

export const ViewPost = ({ route, navigation }) => {

  const [images, setImages] = useState([])

  async function GetGalery(postId) {
    await api.get(`/GaleriaImagens/${postId}`)
      .then((e) => {
        setImages(e.data)
      })
      .catch(() => {
        console.log(`Erro no get galeria`)
      })
  }

  useEffect(() => {
    GetGalery(route.params.post.id)
  }, [])

  return (
    <ScrollView style={{ width: "100%", flex: 1 }} contentContainerStyle={{ height: "100%" }}>
      <StatusBar backgroundColor={"#8531C6"} />

      <Container>
        <View style={{ width: "100%", height: 20, marginBottom: 50 }}>
          <Back navigation={navigation} screen={route.params.screenBack} />
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
        <ScrollView
          style={{ width: `100%` }}
          contentContainerStyle={{ alignItems: `center` }}
        >
          {
            images.length > 0 ? images.map((x) => {
              return (
                <Shadow
                  key={x.id}
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
                      source={{
                        uri: x.media,
                      }}
                    />
                  </Shadow>
                </Shadow>
              );
            }) : <About>Nenhuma imagem da viagem</About>
          }
        </ScrollView>
      </Container>
    </ScrollView>
  );
};
