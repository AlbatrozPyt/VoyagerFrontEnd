import styled from "styled-components";

export const FormBoxLogin = styled.View`
  width: ${(props) => (props.fieldWidth ? props.fieldWidth : "90%")};
  height: max-content;
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap : "30px")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;

export const InputBoxLogin = styled(FormBoxLogin)`
  position: relative;
  width: 100%;
`;

export const InputLogin = styled.TextInput.attrs({
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