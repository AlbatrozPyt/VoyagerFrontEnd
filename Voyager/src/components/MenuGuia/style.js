import styled from "styled-components";

export const ContainerGuia = styled.View`
    width: 90%;
    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 32px 0;
`

export const ContainerGuiaItem = styled.View`
    width: auto;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

export const TitleGuiaItem = styled.Text`
    font-size: 15px;
    text-transform: uppercase;
    font-family: "LouisGeorgeCafe-Bold";
`

export const ButtonGuia = styled.TouchableHighlight.attrs({
    underlayColor: `#8531C6`
})`
    width: 144px;
    height: 45px;
    justify-content: center;
    align-items: center;
    border: 1px solid;

    background-color:  #fff;
`

export const TextGuia = styled.Text`
    font-family: 'LouisGeorgeCafe';
    font-size: 20px;
    color: #000;
`