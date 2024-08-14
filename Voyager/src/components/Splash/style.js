import LottieView from "lottie-react-native";
import styled from "styled-components";
import aviaozinho from "../../assets/aviaozinho.json";
import { LinearGradient } from "expo-linear-gradient";


export const BrandLogo = styled.Image`
    width:300px;
    height:150px;
  `

export const BackgroundScreen = styled(LinearGradient).attrs({
    colors: ["#8531C6", "#BA31C6"],
})`
    flex: 1;
    justify-content: center;
    align-items: center;
  `;

export const AnimationStyle = styled(LottieView).attrs({
    source: aviaozinho,
    autoPlay: true,
    loop: true,
})`
  width: 400px;
  height: 300px;
`;

export const ContainerLottieStyle = styled.View`
  width: 400px;
  height: 300px;
`;