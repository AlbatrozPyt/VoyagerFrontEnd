import styled from "styled-components";
import { ButtonCadastrarViagem } from "../Comps/style";
import { ContainerModalRotina, TitleComment } from "../../screens/CriarRotina/style";

export const ContainerCalendar = styled.View`
    width: 90%;
    height: 68%;
    background-color: #fff;
    align-self: center;
    justify-content: center;
    margin: 20% 0;
    border-radius: 20px;
    border: 2px solid;
    align-items: center;
`

export const ContainerModalCompartilhar = styled(ContainerModalRotina)`
  padding: 37px 37px 47px;
  height: auto;
`

export const TextModal = styled.Text`
    font-family: LouisGeorgeCafe;
    font-size: 20px;
    text-align: justify;
`

export const ButtonModalBox= styled.View`
    width: 100%;
    margin-top: 33px;
`

export const ButtonModal = styled(ButtonCadastrarViagem)`
    width: 250px;
`

export const TitleCompartilhar = styled(TitleComment)`
  font-family: MoonGet;
  text-transform: uppercase;
  text-align: center;
  font-size: 24px;
  margin: 0 0 23px;
  line-height: 35px;
`