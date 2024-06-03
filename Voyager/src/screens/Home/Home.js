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
          renderItem={({ item }) => <PostFeed post={item} navigation={navigation} />}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: "flex-end",
            alignItems: `center`
          }}
        >
          <SearchBar />
          <Shadow
            startColor="#000"
            endColor="#000"
            distance={0}
            offset={[4, 4]}
            containerStyle={{marginRight: 20}}
          >
            <NovaViagem
              style={{
                widht: 35,
                height: 30,
              }}
            >
              <Image
                source={require("../../assets/images/search.png")}
              />
            </NovaViagem>
          </Shadow>
        </View>
      )}
    </Container>
  );
};
