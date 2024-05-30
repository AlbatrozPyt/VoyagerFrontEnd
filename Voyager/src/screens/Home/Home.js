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
          data={[0, 1, 2]}
          renderItem={() => <PostFeed />}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};
