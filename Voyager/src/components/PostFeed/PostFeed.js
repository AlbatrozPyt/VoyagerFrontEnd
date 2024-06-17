import { Image, TouchableOpacity, View } from "react-native";
import {
  BoxOne,
  BoxThree,
  BoxTwo,
  CommentPost,
  ContainerBoxs,
  ContainerIcons,
  ContentPreviewFeed,
  ImageUserFeed,
  LikePost,
  PreviewFeed,
  TextPreviewFeed,
  ThumbnailFeed,
  TitlePreviewFeed,
} from "./style";
import { Shadow } from "react-native-shadow-2";
import { useEffect, useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import api from "../../service/Service";
import moment from "moment";

export const PostFeed = ({
  post,
  user,
  navigation,
  setModalComment,
  setPost,
  screenBack,
  setDep,
  dep
}) => {
  const [like, setLike] = useState(false);
  const [imagemCapa, setImagemCapa] = useState("")


  async function PostCurtida(postId, userId) {
    await api.put(`/VisualizarAvaliacoes/CurtirDescurtirPostagem?IdUsuario=${userId}&IdPostagem=${postId}&dataAvaliacao=${moment().format("YYYY-MM-DDTHH:mm:ss")}`)
      .then(() => {
        GetCurtida(postId, userId)
        dep ? setDep(false) : setDep(true)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  async function GetCurtida(postId, userId) {
    await api.get(`/VisualizarAvaliacoes/VerificarAvaliacao?idUsuario=${userId}&idPostagem=${postId}`)
      .then((e) => {
        setLike(e.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }


  useEffect(() => {
    GetCurtida(post.id, user.jti)
    if(post.galeriaImagens.length !== 0){
      setImagemCapa(post.galeriaImagens[0].media)
    }
  }, [like])

  return (
    <ContainerBoxs
      onPress={() => navigation.replace("ViewPost", { post: post, screenBack: screenBack })}
    >
      <BoxOne>
        <BoxTwo>
          <BoxThree>
            {/* Imagem da postagem */}
            <ThumbnailFeed
              source={{
                uri: (imagemCapa === "") ? `https://voyagerblobstorage.blob.core.windows.net/voyagercontainerblob/BackgroundPost_Defualt.jpg` : imagemCapa
              }}
            />

            {/* Botões de comentar e gostei */}
            <ContainerIcons>
              <TouchableOpacity onPress={() => {
                setPost(post)
                console.log(post.id)
                setModalComment(true)
              }}>
                <MaterialCommunityIcons
                  name="comment-text-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  PostCurtida(post.id, user.jti)
                }}
              >
                {!like ? (
                  <AntDesign name="hearto" size={24} color="#ff2224" />
                ) : (
                  <AntDesign name="heart" size={24} color="#ff2224" />
                )}
              </TouchableOpacity>
            </ContainerIcons>

            {/* Prévia do conteudo */}
            <PreviewFeed>
              <ContentPreviewFeed>
                <TitlePreviewFeed>{post.titulo}</TitlePreviewFeed>

                <TextPreviewFeed>
                  {
                    post.descricao !== undefined
                    && post.descricao !== null
                    && post.descricao.substr(0, 50)
                  }...
                </TextPreviewFeed>
              </ContentPreviewFeed>

              <Shadow
                startColor="#000"
                endColor="#000"
                distance={0}
                offset={[2, 2]}
                style={{ borderRadius: 8 }}
              >
                <ImageUserFeed
                  source={{
                    uri: post.viagem.usuario.foto,
                  }}
                />
              </Shadow>
            </PreviewFeed>
          </BoxThree>
        </BoxTwo>
      </BoxOne>
    </ContainerBoxs>
  );
};
