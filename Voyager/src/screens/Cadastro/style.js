import styled from "styled-components";

export const MainContentCadastrar = styled.View`
    background-color: #FCEDFF;
    width: ${(props) => (props.fieldWidth ? props.fieldWidth : "100%")};
    height: ${(props) => (props.fieldHeight ? props.fieldHeight : "max-content")};
    margin: ${(props) => (props.fieldMargin ? props.fieldMargin : "0 0 90px 0")};
`;