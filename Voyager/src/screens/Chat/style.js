import styled, { css } from "styled-components";
import { InputCadastarViagem } from "../../components/Comps/style";
import { Container } from "../../components/container/style";

export const ContainerScreenChat = styled(Container)`
`

export const ContainerChat = styled.View`
    height: 100%;
    width: 100%;
    padding: 10% 5% 20px;
    align-items: center;
    background-color: white;
    gap: 20px;
`

export const BotaoVoltarStyle = styled.TouchableOpacity`
    height: 35px;
    width: 35px;
`

export const HeaderChat = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: center;
    gap: 20px;
    align-items: center;
    height: 100px;
    position: absolute;
    top: 0px;
    margin: 30px 0 0;
    padding: 15px 0;
    padding-right: 40px; 
    z-index: 1000;
    background-color: white;
`

export const PontoHeader = styled.Text`
    font-size: 48px;
    text-align: center;
    font-family: "LouisGeorgeCafe-Bold";
    height: 100%;
`

export const LogoVoyager = styled.Image`
    height: 77px;
    width: 92px;
`

export const LogoGemini = styled.Image`
    height: 40px;
    width: 106px;
`

export const ChatSectionBox = styled.ScrollView`
    width: 100%;
    display: flex;
    margin: 100px 0 70px;
    overflow-y: hidden;
    /* justify-content: center;
    align-items: center; */
`

export const InputPromptStyle = styled(InputCadastarViagem)`
    width: 345px;
    padding: 0 20px;
`

export const PromptChatStyleShadow = styled.View`
    background-color: black;
    border-radius: 15px 15px ${props => props.type === "usuario" ? "0px 15px" : "15px 0px"};
    align-self: ${props => props.type == "usuario" ? "flex-end" : "flex-start"};
    width: 250px;
    padding: 3px 0 0;
    margin-left: ${props => props.type !== "usuario" ? "3px" : ""};
    position: relative;
`

export const PromptChatStyle = styled(PromptChatStyleShadow)`
    padding: 10px 18px;
    z-index: 100;
    max-height: 100%;
    border: 2px solid black;
    position: relative;
    right: 2px;
    top: -3px;
    background-color: ${props => props.type == "usuario" ? "#FFF" : "#9077C7"};
    margin-left: 0;
`

export const PromptChatText = styled.Text`
    text-align: start;
    /* font-family: "LouisGeorgeCafe-Light"; */
    font-size: 14px;
    color: ${props => (props.type === "usuario") ? "#8531C6" : "#FFF"};
`