import styled from "styled-components";
import { BoxDescription } from "../ViewPost/style";

export const ContainerRota = styled.View`
  width: 340px;
  height: 73px;
  border: 2px solid;
  border-radius: 10px;

  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: #fff;
`;

export const ContentRota = styled.View`
  width: 50%;
  justify-content: center;
  align-items: center;
`;

export const Rota = styled.Text`
  font-family: "LouisGeorgeCafe";
  font-size: 20px;
`;

export const Lugar = styled(Rota)`
  font-family: "MoonGet";
`;

export const Checklist = styled.View`
  width: 340px;
  height: 300px;
  background: #fff;
  border: 2px solid;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
`;

export const CheckBox = styled.View`
  width: "100%";
`;

export const ContentCheck = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin: 5px 0;
`;

export const Check = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border: 3px solid;
  border-radius: 8px;
`;

export const IconCheck = styled.Image`
  position: relative;
  left: 2px;
  bottom: 6px;
  width: 22px;
  height: 22px;
`;

export const ButtonViagem = styled.TouchableOpacity.attrs({
  underlayColor: "red",
})`
  align-items: center;
  justify-content: center;
  width: 340px;
  height: 44px;
  border: 2px solid;
  background: ${ props => props.bgColor ? `${props.bgColor}` : '#fff'};
`;

export const TextButtonViagem = styled.Text`
  font-family: "LouisGeorgeCafe";
  font-size: 16px;
  text-transform: uppercase;
  color: #8531c6;
`;
