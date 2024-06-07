import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

<<<<<<< HEAD:Voyager/src/components/headerGabriel/style.js
// export const ContainerHeader = styled(LinearGradient).attrs({
//     colors: ["#8531C6", "#FF50E4"],
//     start: { x: -0.05, y: 1.08 },
//     end: { x: 1, y: 0 },
//   })`
//     width: 100%;
//     padding: 20px;
//     padding-bottom: 22px;
  
//     flex-direction: row;
//     align-items: center;
//     justify-content: space-between;
  
//     border-radius: 0px 0px 15px 15px;
//     box-shadow: 0px 4px 15px #00000014;
//   `;
=======
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
>>>>>>> origin/Matheus:Voyager/src/components/header/style.js


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
