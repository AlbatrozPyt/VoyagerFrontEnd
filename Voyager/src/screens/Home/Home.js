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

const mockFeed = [
  {
    title: "Pedro - Roma",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.",
  },
  {
    title: "Renato - Paris",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.",
  },
  {
    title: "Murilo - Japão",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.",
  },
];

export const Home = ({ navigation, route }) => {
  const [guia, setGuia] = useState("feed");
  const [modalComment, setModalComment] = useState(false);
  const [comments, setComments] = useState(null)

  const { user } = useContext(UserContext);

  const [posts, setPosts] = useState(null);
  const [post, setPost] = useState(null);

  const [idPostSelecionado, setIdPostSelecionado] = useState(null)

  async function GetAllPosts() {
    await api.get(`/PostagensViagens`)
      .then((r) => {
        setPosts(r.data)
        console.log(posts)
      })
      .catch((r) => {
        console.log(r)
      })
  }

  useEffect(() => {
    GetAllPosts()
  }, [1000])

  useFocusEffect(useCallback(() => {
    GetAllPosts()
  }, []))

  return (
    <Container>
      <StatusBar
        barStyle={"dark-content"}
        translucent={true}
        backgroundColor={"transparent"}
      />

      <Shadow startColor="#00000040">
        <Header navigation={navigation} user={user} />
      </Shadow>

      <Guia setGuia={setGuia} />

      {guia === "feed" ? (
        <ListFeed
          data={posts}
          renderItem={({ item }) => (
            <PostFeed
              setPost={setPost}
              setModalComment={setModalComment}
              setComments={setComments}
              post={item}
              navigation={navigation}
            />
          )}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <Explorar />
      )}

      <ModalComentario
        post={post}
        comments={comments}
        visible={modalComment}
        setVisible={setModalComment}
      />
    </Container>
  );
};
