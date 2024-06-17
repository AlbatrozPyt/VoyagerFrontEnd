import { useEffect } from "react";
import { BackgroundScreen, BrandLogo } from "./style";
import { AnimationStyle, ContainerLottieStyle } from "./style"
import { CommonActions } from "@react-navigation/native";
import { Image } from "react-native";

export default function Splash({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{ name: 'Login' }]
            }))
        }, 5000);
    })

    return (
        <BackgroundScreen>
            <Image
                style={{
                    width: 89,
                    height: 74
                }}
                source={require(`../../assets/images/LogoGiga.png`)}
            />
            <SplashAnimation />
        </BackgroundScreen>
    )
}

export const SplashAnimation = () => {
    return (
        <ContainerLottieStyle>
            <AnimationStyle />
        </ContainerLottieStyle>
    )
}