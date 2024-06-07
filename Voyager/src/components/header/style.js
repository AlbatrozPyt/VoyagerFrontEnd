import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const ContainerHeader = styled(LinearGradient).attrs({
  colors: ["#FF50E4", "#8531C6"],
  start: { x: -0.1, y: 1.0 },
  end: { x: 1, y: 2 },
})`
    width: 100%;
    height: 131px;
    padding: 0 36px;
    padding-top: 20px;
  
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `;


export const LogoHeader = styled.Image`
  width: 85px;
  height: 71px;
`

export const ContentUser = styled.View`
  width: 150px;
  padding: 0 11px;
`

export const UserName = styled.Text`
  font-family: 'LouisGeorgeCafe-Bold';
  font-size: 16px;
  color: white;
  text-transform: uppercase;
  width: 100%;
  text-align: right;
`

export const BoxShadowUser = styled.View`
  background-color: black;
  width: 70px;
  height: 70px;
  border-radius: 8px;
  position: relative;
`

export const UserImage = styled.Image`
  border-radius: 8px;
  width: 70px;
  height: 70px;
  position: relative;
  right: 3px;
  bottom: 3px;
`
