import { ScrollView } from "react-native";
import { Container } from "../../components/container/style";
import {
  ButtonEdit,
  ContainerBio,
  ContentBio,
  ContentInfo,
  ImageLogout,
  ImageTop,
  PerfilInfo,
  TextBio,
  TextInfo,
  UserImage,
} from "./style";
import { TitleDefault } from "../../components/Text/style";
import { useCallback, useContext, useEffect, useState } from "react";
import { GuiaPerfil } from "../../components/MenuGuia/MenuGuia";
import { PostFeed } from "../../components/PostFeed/PostFeed";
import { ButtonViagem, TextButtonViagem } from "../ViagemAtual/style";
import { Feather } from "@expo/vector-icons";
import {
  ShadowBoxPerfil,
  ShadowButton2,
  ShadowOpacity,
  ShadowPerfilImage,
} from "../../components/Shadow";
import { UserContext } from "../../contexts/MyContext";
import { ModalComentario } from "../../components/Modal/index"

import api from "../../service/Service";
import { useFocusEffect } from "@react-navigation/native";


export const Perfil = ({ navigation }) => {
  const [guia, setGuia] = useState(`posts`);
  const { user } = useContext(UserContext);
  const [response, setResponse] = useState(null);
  const [userData, setUserData] = useState(null)

  const [postData, setPostData] = useState(null)

  const [likedPostData, setLikedPostData] = useState(null)

  const [post, setPost] = useState(null)
  const [modalComment, setModalComment] = useState(false)


  console.log(user)

  async function GetUser() {
    const get = await api.get(`/Usuarios/${user.jti}`
    ).then(response => {
      setUserData(response.data);

    }).catch(error => {
      console.log(error);
    });

  }

  async function GetPosts() {
    const get = await api.get(`/PostagensViagens/ListarPostagensProprias/${user.jti}`
    ).then(response => {
      setPostData(response.data);


    }).catch(error => {
      console.log(error);
    });

  }
  async function GetLikedPosts() {
    const get = await api.get(`/PostagensViagens/ListarPostagensCurtidas/${user.jti}`
    ).then(response => {

      console.log(response.data);
      setLikedPostData(response.data);


    }).catch(error => {
      console.log(error);
    });

  }

  useEffect(() => {
    if (guia == 'posts') {
      GetPosts();
    } else {
      GetLikedPosts()
    }
  }, []);

  useEffect(() => {
    GetUser();
  }, []);

  useFocusEffect(useCallback(() => {
    GetUser()
    GetLikedPosts()
  }, []));


  return userData !== null && (
    <ScrollView>
      <ImageTop source={{ uri: 'https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/ImageTop.png' }} />

      <ImageLogout source={{ uri: 'https://voyagerblobstorage.blob.core.windows.net/voyagercontainerblob/Botao_Deslogar.png' }} />

      <Container>
        <PerfilInfo>
          <ShadowPerfilImage>
            <UserImage
              source={{
                uri: userData.foto
              }}
            />

            <ButtonEdit
              onPress={() => navigation.navigate(`EditPerfil`, { nome: userData.nome, bio: userData.bio, foto: userData.foto })}
            >
              <Feather name="edit-2" size={24} color="#000" />
            </ButtonEdit>
          </ShadowPerfilImage>

          <ShadowBoxPerfil>
            <ContentInfo>
              <TextInfo>{userData.nome}</TextInfo>
              {/* <TextInfo>23 anos</TextInfo> */}
            </ContentInfo>
          </ShadowBoxPerfil>
        </PerfilInfo>

        <ContainerBio>
          <TitleDefault>Sobre mim:</TitleDefault>

          <ShadowOpacity
            render={
              <ContentBio>
                <TextBio>
                  {userData.bio}
                </TextBio>
              </ContentBio>
            }
          />
        </ContainerBio>

        <GuiaPerfil setGuia={setGuia} />

        {guia === `posts` && (
          <ShadowButton2
            render={
              <ButtonViagem onPress={() => navigation.navigate(`CriarPost`)}>
                <TextButtonViagem>compartilhe sua viagem</TextButtonViagem>
              </ButtonViagem>
            }
          />
        )}

        {postData !== null && guia === 'posts' ?
          postData.map((x) => {
            return <PostFeed
              key={x.id}
              post={x}
              navigation={navigation}
              user={user}
              setModalComment={setModalComment}
              setPost={setPost}
            />;
          })
          : (likedPostData != null ?
            likedPostData.map((x) => {
              return <PostFeed
                key={x.id}
                post={x}
                navigation={navigation}
                user={user}
                setModalComment={setModalComment}
                setPost={setPost}
              />;
            })
            : null)

        }

        <ModalComentario
          post={post}
          setPost={setPost}
          visible={modalComment}
          setVisible={setModalComment}
          user={user}
        />
      </Container>
    </ScrollView>
  )
};
