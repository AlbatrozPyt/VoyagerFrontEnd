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

export const PostFeed = () => {
  const [like, setLike] = useState(false);

  return (
    <ContainerBoxs>
      <BoxOne>
        <BoxTwo>
          <BoxThree>
            <ThumbnailFeed
              source={require("../../assets/images/FotoViagemFeed.png")}
            />

            <ContainerIcons>
              <TouchableOpacity>
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

            <PreviewFeed>
              <ContentPreviewFeed>
                <TitlePreviewFeed>Pedro - Roma</TitlePreviewFeed>

                <TextPreviewFeed>
                  Essa foi minha primeira viagem para o exterior e não poderia
                  ser melhor...
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
