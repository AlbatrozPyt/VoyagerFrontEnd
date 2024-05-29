import { ScrollView } from "react-native";
import styled from "styled-components";


export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center; 
`;

export const ContainerHeader = styled.SafeAreaView`
width: 100%;
padding: 20px;
padding-bottom: 22px;

flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const MainContentScroll = styled(ScrollView)`
  width: 100%;
  background-color: white; 
`;

export const MainContent = styled.View`
  background-color: theme;
  width: ${(props) => (props.fieldWidth ? props.fieldWidth : "100%")};
  height: ${(props) => (props.fieldHeight ? props.fieldHeight : "max-content")};
  margin: ${(props) => (props.fieldMargin ? props.fieldMargin : "0 0 90px 0")};
  align-items: center;
  background-color: white;
  /* margin-top: 10px; */
`;

export const FormBox = styled.View`
  width: ${(props) => (props.fieldWidth ? props.fieldWidth : "90%")};
  height: max-content;
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap : "20px")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;

export const InputBox = styled(FormBox)`
position: relative; 
width: 100%;
margin-vertical: 20px;
gap: ${(props) => (props.gap ? props.gap : "0px")};
margin: ${(props) => (props.margin ? props.margin : "0")};
flex-direction: ${(props) =>
  props.fieldFlexDirection ? props.fieldFlexDirection : "column"};
justify-content: ${(props) =>
  props.justifyContent ? props.justifyContent : "center"};
align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
`;
