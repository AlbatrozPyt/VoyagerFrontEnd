import styled from "styled-components";
import { ButtonModalRotina } from "../CriarRotina/style";
import { Container } from "../../components/container/style";

export const ContainerEditPerfil = styled(Container)`
    width: 100%;
    padding-top: 10px;
    margin: 0;
`

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
    border-radius: 8px;
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
    margin: 20px 0 30px;
    gap: 20px;
`

export const ContentEdit = styled.View``

export const InputPerfil = styled.TextInput`
    width: ${props => props.width ? `${props.width}` : "333px"};
    height: auto;
    border: 2px solid #BA31C6;
    padding: 5px 18px;
    border-radius: 10px;
    background-color: #fff;
    color: black;
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

export const ButtonAction = styled(ButtonModalRotina)`
    width: 100%;
`

export const ContentEditRow = styled.View`
    max-width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
`
