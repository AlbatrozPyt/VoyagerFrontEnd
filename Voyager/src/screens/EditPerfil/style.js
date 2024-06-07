import styled from "styled-components";

export const TopImageEdit = styled.Image`
    position: absolute;
    top: 0;
    left: -10px;
    width: 110%;
    height: 380px;
`

export const ContainerEditPhoto = styled.View`
    margin: 40px 0;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const UserImage = styled.Image`
    width: 297px;
    height: 297px;
`

export const TakePicture = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 50px;
    background-color: #8531C6;
    border: 2px solid;
`

export const ContainerInputsPerfil = styled.View`
    margin: 20px 0;
`

export const ContentEdit = styled.View``

export const InputPerfil = styled.TextInput`
    width: 333px;
    height: 50px;
    border: 2px solid #BA31C6;
    padding: 0 18px;
    border-radius: 10px;
    background-color: #fff;
`

export const InputBio = styled(InputPerfil)`
    height: auto;
`

export const LabelPerfil = styled.Text`
    font-family: 'LouisGeorgeCafe';
    font-size: 20px;
    text-transform: uppercase;
    margin: 10px 0;
`
