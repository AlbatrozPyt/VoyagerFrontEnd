import { TouchableOpacity, View } from "react-native";
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
import { useState } from "react";

export const PostFeed = ({ post, navigation, setModalComment }) => {
  const [like, setLike] = useState(false);

  return (
    <ContainerBoxs onPress={() => navigation.replace('ViewPost', {post: post})}>
      <BoxOne>
        <BoxTwo>
          <BoxThree>
            {/* Imagem da postagem */}
            <ThumbnailFeed
              source={require("../../assets/images/FotoViagemFeed.png")}
            />

            {/* Botões de comentar e gostei */}
            <ContainerIcons>
              <TouchableOpacity onPress={() => setModalComment(true)}>
                <CommentPost
                  source={require("../../assets/images/comment.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  !like ? setLike(true) : setLike(false);
                }}
              >
                <LikePost
                  source={
                    !like
                      ? require("../../assets/images/like-null.png")
                      : require("../../assets/images/liked.png")
                  }
                />
              </TouchableOpacity>
            </ContainerIcons>

            {/* Prévia do conteudo */}
            <PreviewFeed>
              <ContentPreviewFeed>
                <TitlePreviewFeed>{post.title}</TitlePreviewFeed>

                <TextPreviewFeed>
                  {post.description.substr(0, 57)}...
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
                  source={require("../../assets/images/PedroFeed.png")}
                />
              </Shadow>
            </PreviewFeed>
          </BoxThree>
        </BoxTwo>
      </BoxOne>
    </ContainerBoxs>
  );
};
