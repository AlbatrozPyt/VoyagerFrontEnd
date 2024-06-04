import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

// css dos botões 
export const Button = styled.TouchableOpacity`
width: 300px;
height: 50px;
padding: 10px;
margin-vertical: 10px;
border-width: 1px;
color: #000;
background-color: #8531C6;

`;

// css do texto dos botões 
export const ButtonTitle = styled.Text`
  text-align: center;
  font-size: 20px;
  color: #ffffff;
  text-transform: uppercase;
  font-family: "LouisGeorgeCafe-Bold";
`;
