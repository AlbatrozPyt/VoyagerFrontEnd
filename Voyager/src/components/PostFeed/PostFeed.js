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

export const PostFeed = ({
  post,
  user,
  navigation,
  setModalComment,
  setPost,
  screenBack
}) => {
  const [like, setLike] = useState(false);


  async function PostCurtida(postId, userId) {
    await api.put(`/VisualizarAvaliacoes/CurtirDescurtirPostagem?IdUsuario=${userId}&IdPostagem=${postId}`)
      .then(() => {
        GetCurtida(postId, userId)
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
                uri: `https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/FotoViagemFeed.png?raw=true`,
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
                    uri: "https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/PedroFeed.png?raw=true",
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
