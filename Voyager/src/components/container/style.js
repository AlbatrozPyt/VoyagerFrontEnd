import { FlatList, ScrollView } from "react-native";
import styled from "styled-components";

export const Container = styled.SafeAreaView`
flex: 1; 
align-items:center;
background-color: #FCEDFF;
`

export const ContainerFeed = styled.ScrollView`
    width: 100%;
    background: yellow;
`

export const ListFeed = styled(FlatList)`
    width: 100%;
`

// Conteúdo principal, com rolagem e fundo definido
export const MainContentScroll = styled(ScrollView)`
  width: 100%;
  background-color: #FCEDFF; 
`;

// Conteúdo principal, com largura e altura configuráveis via props
export const MainContent = styled.View`
  background-color: #FCEDFF;
  width: ${(props) => (props.fieldWidth ? props.fieldWidth : "100%")};
  height: ${(props) => (props.fieldHeight ? props.fieldHeight : "max-content")};
  margin: ${(props) => (props.fieldMargin ? props.fieldMargin : "0 0 90px 0")};
  align-items: center;
`;

// Caixa de formulário, com largura configurável via props e espaçamento interno
export const FormBox = styled.View`
  width: ${(props) => (props.fieldWidth ? props.fieldWidth : "90%")};
  height: max-content;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  gap: ${(props) => (props.gap ? props.gap : "20px")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;

// Caixa de input
export const InputBox = styled(FormBox)`
  position: relative;
  width: 100%;
`;

// Caixa de botões, reutiliza o estilo de FormBox com algumas modificações
export const ButtonBox = styled(FormBox)`
  width: ${(props) => (props.fieldWidth ? props.fieldWidth : "100%")};
  justify-content: ${(props) =>
    props.fieldJustifyContent ? props.fieldJustifyContent : "start"};
  align-items: ${(props) =>
    props.fieldAlignItems ? props.fieldAlignItems : "center"};
  flex-direction: ${(props) =>
    props.fieldFlexDirection ? props.fieldFlexDirection : "column"};
  margin: ${(props) => (props.fieldMargin ? props.fieldMargin : "0")};
`;

// Caixa para a criação de conta
export const CreateAccountBox = styled.View`
  width: 100%;
  max-height: 100%;
  justify-content: center;
  align-items: center; 
  margin-top: 30px;
`;

// centralizar conteúdo de formulário
export const CenteredContent = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center; 
    /* justify-content: center;  */
`;

export const InputCodeContainer = styled.View`
  position: relative;
  width: 80px;  /* Ajuste conforme necessário */
  height: 120px;  /* Ajuste conforme necessário */
  margin: 5px;  /* Espaçamento entre os inputs */
  justify-content: center; 
  align-items: center; 
`;

export const InputBoxCode = styled(InputBox)`
  justify-content: center; 
  align-items: center; 
`;