import { Image } from "react-native";
import styled from "styled-components";

// Container que segura todas as caixas
export const ContainerBoxs = styled.TouchableOpacity.attrs({
  underlayColor: 'black'
})`
  margin: 14px 0;
  width: 90%;
  align-items: flex-end;
  align-self: center;
`;

// Primeira a caixa (que ficara atras de todas)
export const BoxOne = styled.View`
  width: 98%;
  height: 200px;
  border: 2px solid;
  border-radius: 5px;
  background: #fff;
`;

// Segunda caixa fica por cima da primeira e herda suas propriedades
export const BoxTwo = styled(BoxOne)`
  width: 101%;
  margin: 0;
  position: relative;
  z-index: 2;
  bottom: 6px;
  right: 6px;
`;

// Terceira caixa que vai ficar por cima de todas e herda a Caixa 2
export const BoxThree = styled(BoxTwo)`
  z-index: 3;
  justify-content: space-between;
  align-items: center;
`;

// Imagem da viagem
export const ThumbnailFeed = styled.Image`
  position: relative;
  bottom: 1px;
  width: 101%;
  height: 116px;
  object-fit: cover;
  border: 2px solid;
  border-radius: 5px 5px 0 0;
`;

// Container que segura os icones de comentário e like
export const ContainerIcons = styled.View.attrs({
  borderRightWidth: 0,
  borderBottomWidth: 0,
  borderLeftWidth: 2,
  borderTopWidth: 2
})`
  position: absolute;
  right: 0;
  top: 86px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 90px;
  height: 30px;
  background: white;
  
`


// Icone de comentário
export const CommentPost = styled.Image`
  max-width: 24px;
  max-height: 20px;
`

// Icone de coração
export const LikePost = styled.Image`
  max-width: 26px;
  max-height: 23px;
`

// Container que segura o conteudo prévio do post
export const PreviewFeed = styled.View`
  width: 90%;
  height: 40%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// Container que segura o texto do post
export const ContentPreviewFeed = styled.View`
  width: 70%;
  height: 100%;
  gap: 7px;
`;

// Titulo do post
export const TitlePreviewFeed = styled.Text`
  font-family: "MoonGet";
  font-size: 16px;
  color: black;
  line-height: 25px;
`;

// Descricao do post
export const TextPreviewFeed = styled.Text`
  width: 100%;
  height: 40px;
  text-align: left;
  word-wrap: break-word;
  line-height: 14px;
  font-family: "LouisGeorgeCafe-Light";
  font-size: 14px;
`;

// Imagem do usuário que postou
export const ImageUserFeed = styled.Image`
  width: 64px;
  height: 58px;
  border-radius: 8px;
`