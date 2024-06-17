import styled from "styled-components";
import { ButtonCadastrarViagem, InputCadastarViagem } from "../../components/Comps/style";
import { TitleDefault } from "../../components/Text/style";


// Modal de rotina
export const TitleRotina = styled.Text`
  width: 250px;
  font-family: "MoonGet";
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  line-height: 38px;
  margin: 80px 0;
`;

export const ButtonAddAtividade = styled.Text`
    font-family: 'LouisGeorgeCafe-Bold';
    font-size: 14px;
    color: #8531C6;
`

export const AboutGemini = styled(ButtonAddAtividade)`
    color: #000;
    margin: 20px;
`
export const AboutGeminiDashed = styled(ButtonAddAtividade)``

export const BackgroundModalRotina= styled.View`
  width: 100%;
  height: 100%;
  background-color: #00000067;
`

export const ContainerModalRotina = styled.View`
  width: 90%;
  height: 400px;
  background-color: #fff;
  border: 2px solid;
  align-self: center;
  align-items: center;
  margin: 38% 0;
  border-radius: 20px;
`

export const LabelModalRotina = styled.Text`
  font-family: LouisGeorgeCafe-Bold;
  font-size: 20px;
`

export const InputRotina = styled(InputCadastarViagem)`
  width: 300px;
  height: 50px;
`

export const ButtonModalRotina = styled(ButtonCadastrarViagem)`
`

// Modal de comentario
export const ContainerComment = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #fff;
  border: 2px solid;
  align-items: center;
`

export const TitleComment = styled(TitleDefault)`
  font-family: 'LouisGeorgeCafe-Bold';
  text-transform: capitalize;
  margin: 20px 0;
`

export const ContainerListComment = styled.View.attrs({
  borderTopWidth: 2,
  borderTopColor: `#000`,
  borderBottomWidth: 2,
  borderBottomColor: `#000`,
})`
  width: 90%;
  height: 220px;
  margin: 20px 10px;
`

export const ContentComment = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin: 10px 0;
`

export const ImageComment = styled.Image`
  width: 47px;
  height: 47px;
  border-radius: 13px;
`

export const ContainerText = styled.View`
  display: grid;
  gap: 5px;
`

export const UserComment = styled.Text`
  font-family: 'LouisGeorgeCafe-Bold';
  font-size: 14px;
`

export const TextComment = styled.Text`
  font-family: 'LouisGeorgeCafe';
  font-size: 12px;
  width: 100%;
`

export const InputComment = styled.TextInput`
  width: 340px;
  background-color: white;
  height: 50px;
  border: 2px solid;
  padding: 0 10px;
`