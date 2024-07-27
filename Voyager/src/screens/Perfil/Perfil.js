import { ScrollView } from "react-native";
import { Container } from "../../components/container/style";
import {
  ButtonEdit,
  ContainerBio,
  ContainerPerfil,
  ContentBio,
  ContentInfo,
  ImageLogout,
  ImageLogoutBox,
  ImageTop,
  ImageTopBox,
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
import { TitleViagensFuturas } from "../ViagensFuturas/style";


export const Perfil = ({ navigation }) => {
  const [guia, setGuia] = useState(`posts`);
  const { user } = useContext(UserContext);
  const [response, setResponse] = useState(null);
  const [userData, setUserData] = useState(null)

  const [postData, setPostData] = useState(null)

  const [likedPostData, setLikedPostData] = useState(null)

  const [post, setPost] = useState(null)
  const [modalComment, setModalComment] = useState(false)

  const [dep, setDep] = useState(false)

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

      setLikedPostData(response.data);


    }).catch(error => {
      console.log(error);
    });

  }

  useEffect(() => {
    GetUser();
  }, []);

  useFocusEffect(useCallback(() => {
    GetUser()
    GetLikedPosts()
    GetPosts();
  }, []));

  useEffect(() => {
    GetUser()
    GetLikedPosts()
    GetPosts();
    console.log(dep)
  }, [dep])



  return userData !== null && (
    <Container>

      <ImageTopBox>
        <ImageTop source={{ uri: 'https://voyagerblobstorage.blob.core.windows.net/voyagercontainerblob/ImageTop.png' }} />
      </ImageTopBox>



      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <PerfilInfo>
          <ImageLogoutBox onPress={() => navigation.replace("Login")}>
            <ImageLogout source={{ uri: 'https://voyagerblobstorage.blob.core.windows.net/voyagercontainerblob/Botao_Deslogar.png' }} />
          </ImageLogoutBox>
          <ShadowPerfilImage>
            <UserImage
              source={{
                uri: userData.foto
              }}
            />

            <ButtonEdit
              onPress={() => navigation.navigate(`EditPerfil`, { nome: userData.nome, bio: userData.bio, foto: userData.foto, enderecoUsuario: userData.enderecoUsuario })}
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
            styleRender={{ width: "100%" }}
            render={
              <ContentBio>
                <TextBio>
                  {(userData.bio != null && userData.bio != "") ? userData.bio : "Adicione uma bio ao seu perfil em Editar Perfil"}
                </TextBio>
              </ContentBio>
            }
          />
        </ContainerBio>

        <GuiaPerfil setGuia={setGuia} />

        {guia === `posts` && (
          <ShadowButton2

            render={
              <ButtonViagem onPress={() => navigation.navigate(`HistoricoViagens`)}>
                <TextButtonViagem>compartilhe uma nova viagem</TextButtonViagem>
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
              screenBack={"Perfil"}
              setDep={setDep}
              dep={dep}
            />;
          })
          : (likedPostData != null ?
            likedPostData.map((x) => {
              return <PostFeed
                key={x.id}
                post={x.postagemViagem}
                navigation={navigation}
                user={user}
                setModalComment={setModalComment}
                setPost={setPost}
                screenBack={"Perfil"}
                setDep={setDep}
                dep={dep}
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
      </ScrollView>

    </Container>
  )
};
