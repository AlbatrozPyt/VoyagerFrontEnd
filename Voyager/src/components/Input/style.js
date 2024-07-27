import styled from "styled-components/native";

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#BA31C6",
})`
  width: 100%;
  height: 50px;
  padding: 10px;
  margin: 10px 0;
  border-width: 2px;
  border-color: #000;
  border-radius: 0px;
  font-size: 16px;
  color: #000;
  background-color: #fff;
`;

export const Sombra = styled.View`
  position: absolute;
  top: 15px;
  left: 5px;
  width: 100%;
  height: 50px;
  background-color: #000;
  border-radius: 0px;
  z-index: -1;
`;

export const InputCode = styled(Input).attrs({
  placeholderTextColor: "#F17DDF",
})`
  height: 140px;
  width: 80px;
  font-size: 80px;
  font-family: "LouisGeorgeCafe-Bold";
  text-align: center;
  margin-left: 20px; 
`;


export const SombraCode = styled.View`
  position: absolute;
  left: 15px;
 top: -5px; 
  width: 100%;
  height: 140px;
  background-color: #000;
  border-radius: 0px;
  z-index: -1;
`;