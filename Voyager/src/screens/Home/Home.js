import { Image, StatusBar, View } from "react-native";

import {
  Container,
  ContainerFeed,
  ListFeed,
} from "../../components/container/style";
import { Header } from "../../components/header/header";
import { Guia } from "../../components/MenuGuia/MenuGuia";
import { PostFeed } from "../../components/PostFeed/PostFeed";
import { useCallback, useContext, useEffect, useState } from "react";
import { Shadow } from "react-native-shadow-2";
import { SearchBar } from "../../components/Search/style";
import { NovaViagem } from "../Viagens/style";
import { Explorar } from "../../components/Explorar/Explorar";
import { ModalComentario } from "../../components/Modal";
import { UserContext } from "../../contexts/MyContext";

import api from "../../service/Service"
import { useFocusEffect } from "@react-navigation/native";


export const Home = ({ navigation, route }) => {
  const [guia, setGuia] = useState("feed");
  const [modalComment, setModalComment] = useState(false);

  const { user } = useContext(UserContext);

  const [posts, setPosts] = useState(null);
  const [post, setPost] = useState(null);


  async function GetAllPosts() {
    await api.get(`/PostagensViagens`)
      .then((r) => {
        setPosts(r.data)
      })
      .catch((r) => {
        console.log(r)
      })
  }

  useEffect(() => {
    GetAllPosts()
  }, [route])

  useFocusEffect(useCallback(() => { GetAllPosts() }, []))


  return (
    <Container>
      <StatusBar
        barStyle={"dark-content"}
        translucent={true}
        backgroundColor={"transparent"}
      />

      <Shadow startColor="#00000040">
        <Header navigation={navigation} user={user}/>
      </Shadow>

      <Guia setGuia={setGuia} />

      {guia === "feed" ? (
        <ListFeed
          data={posts}
          renderItem={({ item }) => (
            <PostFeed
              post={item}
              setPost={setPost}
              user={user}
              navigation={navigation}
              setModalComment={setModalComment}
              screenBack={"Home"}
            />
          )}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <>
          <Explorar navigation={navigation} />
          <View style={{marginBottom: 30}} />
        </>
      )}

      <ModalComentario
        post={post}
        setPost={setPost}
        visible={modalComment}
        setVisible={setModalComment}
        user={user}
      />
    </Container>
  );
};
