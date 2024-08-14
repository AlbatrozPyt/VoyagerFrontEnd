import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

// css dos botões
export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  padding: 10px;
  margin: 10px 0;
  border-width: 1px;
  color: #000;
  background-color: #8531c6;
`;

// css do texto dos botões
export const ButtonTitle = styled.Text`
  text-align: center;
  font-size: 20px;
  color: #ffffff;
  text-transform: uppercase;
  font-family: "LouisGeorgeCafe-Bold";
`;

export const ButtonBack = styled(TouchableOpacity)`
  position: absolute;
  top: 60px;
  left: 20px;
`;

export const ButtonTitleCamera = styled.Text`
    color: #FAFAFA;
    font-size: 14px;
`

export const ButtonAppointmentSecondary = styled(Button)`
    background-color: transparent;
    border: none;
    margin-top: 30px;
`

export const ButtonModalAppointment = styled(Button)`
    width: 80%;
    margin-top: 30px;
`

export const ButtonSecondaryText = styled.Text`
    color: #496BBA;
    font-size: 14px;
    text-decoration: underline;
    text-decoration-color: #496BBA;
    align-self: center;
    /* margin-top: 16px; */
`
