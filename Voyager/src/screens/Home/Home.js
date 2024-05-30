import { StatusBar } from "react-native";

import {
  Container,
  ContainerFeed,
  ListFeed,
} from "../../components/Container/style";
import { Header } from "../../components/Header/header";
import { Guia } from "../../components/MenuGuia/MenuGuia";
import { PostFeed } from "../../components/PostFeed/PostFeed";
import { useState } from "react";


const mockFeed = [
    {
        title: "Pedro - Roma",
        description: "Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi."
    },
    {
        title: "Renato - Paris",
        description: "Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi."
    },   
    {
        title: "Murilo - Japão",
        description: "Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi."
    },
]



export const Home = () => {
  const [guia, setGuia] = useState("feed");

  return (
    <Container>
      <StatusBar
        barStyle={"light-content"}
        translucent={true}
        backgroundColor={"transparent"}
      />

      <Header />

      <Guia setGuia={setGuia} />

      {guia === "feed" ? (
        <ListFeed
          data={mockFeed}
          renderItem={({item}) => <PostFeed post={item}/>}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};
