import { Image, View } from "react-native";
import styled from "styled-components";

export const ImageDestaque = styled.Image`
    width: 100%;
    height: 249px;
    border: 2px solid;
    background-color: #00000050;
`

export const OtherImages = styled(Image)`
    width: 117px;
    height: 98px;
    border: 2px;
`

export const ContainerOtherImages = styled(View)`
    width: 100%;
    height: 98px;
    flex-direction: row;
    justify-content: center;
`

export const AddPicture = styled.TouchableOpacity`
    width: 117px;
    height: 98px;
    background-color: #ffffff90;
    border: 2px solid;
    align-items: center;
    justify-content: center;
`

export const InputPost = styled.TextInput`
    width: 333px;
    height: 47px;
    background-color: #fff;
    border: 2px solid;
    padding: 0 10px;
`