import { Image } from "react-native";
import styled from "styled-components";

export const TitleViagensFuturas = styled.Text`;
    font-family: 'LouisGeorgeCafe-Bold';
    font-size: 20px;
    height: 80px;
    text-transform: uppercase;
`

export const ContainerPostIts = styled.View`
    width: 90%;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: center;
    justify-content: space-between;
    margin: 10px 0;
`

export const PostItImage = styled(Image)`
    position: absolute;
    width: 100%;
    height: 100%;
`

export const PostIts = styled.TouchableOpacity`
    margin: 20px 0;
    position: relative;
    width: 140px;
    height: 147px;
    align-items: center;
`

export const TextDestino = styled.Text`
    font-family: 'LouisGeorgeCafe-Bold';
    font-size: 24px;
    margin: 20px 0;
`

export const TextData = styled(TextDestino)`
    font-size: 16px;
`