import styled from "styled-components";

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#BA31C6",
  })`
  width: 300px;
  height: 50px;
  padding: 10px;
  margin-vertical: 10px;
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
  left: 25px;
  width: 90%;
  height: 50px;
  background-color: #000;
  border-radius: 0px;
  z-index: -1; 
`;
