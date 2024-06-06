import { Image, StatusBar, View } from "react-native";

import {
  Container,
  ContainerFeed,
  ListFeed,
} from "../../components/container/style";
import { Header } from "../../components/header/header";
import { Guia } from "../../components/MenuGuia/MenuGuia";
import { PostFeed } from "../../components/PostFeed/PostFeed";
import { useState } from "react";
import { Shadow } from "react-native-shadow-2";
import { SearchBar } from "../../components/Search/style";
import { NovaViagem } from "../Viagens/style";
import { Explorar } from "../../components/Explorar/Explorar";
import { ModalComentario } from "../../components/Modal";


const mockFeed = [
  {
    title: "Pedro - Roma",
    description: "Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi."
  },
  {
    title: "Renato - Paris",
    description: "Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi."
  },
  {
    title: "Murilo - Japão",
    description: "Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi."
  },
]



export const Home = ({ navigation }) => {
  const [guia, setGuia] = useState("feed");

  const [modalComment, setModalComment] = useState(false);

  return (
    <Container>
      <StatusBar
        barStyle={"dark-content"}
        translucent={true}
        backgroundColor={"transparent"}
      />

      <Shadow
        startColor="#00000040"
      >
        <Header />
      </Shadow>

      <Guia setGuia={setGuia} />

      {guia === "feed" ? (
        <ListFeed
          data={mockFeed}
          renderItem={
            ({ item }) => <PostFeed setModalComment={setModalComment} post={item} navigation={navigation} />
          }
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <Explorar />
      )}


      <ModalComentario visible={modalComment} setVisible={setModalComment} />
    </Container>
  );
};
