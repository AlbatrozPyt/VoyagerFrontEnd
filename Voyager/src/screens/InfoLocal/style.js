import styled from "styled-components";
import { Container } from "../../components/container/style";
import { ContentBio, TextBio } from "../Perfil/style";
import { LinkMedium } from "../../components/Link/style";

export const ContainerInfoLocal = styled(Container)`
    padding: 8.7% 0 15px;
`

export const LocalMapBox = styled.View`
    width: 100%;
    height: 300px;
    background-color: lightgreen;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TitleInfoLocal = styled.Text`
    font-size: 24px;
    font-family: MoonGet;
    text-align: center;
    margin: 15px 0 20px;
`

export const DescricaoLocalBox = styled.View`
    width: 85%;
    gap: 15px;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    /* border: 1px solid black; */
`

export const ContentDescricaoLocal = styled(ContentBio)`
    gap: 3px;
    padding: 10px;
`

export const TitleDescricaoLocal = styled(TextBio)`
    font-weight: bold;
    text-align: left;
    font-size: 16px;
`

export const TextDescricaoLocal = styled(TextBio)`
    text-align: justify;
    font-size: 16px;
`

export const GaleriaLocalBox = styled.View`
    width: 85%;
    margin: 22px 0;
    /* border: 1px solid black; */
    align-items: start;
`

export const TitleGaleriaLocal = styled.Text`
    font-family: MoonGet;
    font-size: 20px;
    margin-bottom: 15px;
`

export const LinkVoltar = styled(LinkMedium)`
    align-self: center;
`