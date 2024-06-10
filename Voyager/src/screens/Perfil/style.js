import styled from "styled-components";
import { TitleDefault } from '../../components/Text/style'
import { ButtonGuia } from "../../components/MenuGuia/style";

export const ImageTop = styled.Image`
  position: absolute;
  top: 0px;
  right: -4px;
  width: 100%;
  height: 400px;
`;

export const PerfilInfo = styled.View`
  width: 100%;
  height: 300px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const UserImage = styled.Image`
  width: 173px;
  height: 173px;
  border-radius: 8px;
`;

export const ButtonEdit = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin: 5px;
  border-radius: 5px;
  background: #ffffff70;
`;

export const EditIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin: 2px;
`;

export const ContentInfo = styled.View`
  position: relative;
  width: 154px;
  border-radius: 10px;
  background-color: #fff;
  border: 2px solid #ba31c6;
  padding: 5px;
  align-items: center;
`;
export const TextInfo = styled.Text`
  font-family: "LouisGeorgeCafe-Bold";
  font-size: 20px;
`;

export const ContainerBio = styled.View`
  width: 80%;
`
export const ContentBio = styled(ContentInfo)`
  width: 100%;
`

export const TextBio = styled.Text`
  font-family: 'LouisGeorgeCafe';
  font-size: 15px;
`

export const ButtonGuiaPerfil = styled(ButtonGuia)`
  padding: 0;
`