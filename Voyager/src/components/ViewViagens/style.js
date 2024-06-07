import styled from "styled-components";
import { BoxOne, BoxThree, BoxTwo } from "../PostFeed/style";

export const BoxOneViagem = styled(BoxOne)`
  height: 120px;
  border-radius: 0;
  background-color: ${props => `${props.color}` };
`;
export const BoxTwoViagem = styled(BoxTwo)`
  border-radius: 0;
  height: 120px;
  background-color: ${props => `${props.color}` };
`;

export const BoxThreeViagem = styled(BoxTwoViagem)`
  flex-direction: row;
`;

export const IconViagens = styled.Image`
  margin: 20px;
  width: 57px;
  height: 57px;
  align-self: center;
`;

export const ContentViagens = styled.View`
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 70%;
  padding: 10px 0;
`;

export const TitleViagens = styled.Text`
  font-family: "LouisGeorgeCafe-Bold";
  font-size: 20px;
  width: 82%;
`;

export const DescriptionViagens = styled.Text`
    font-family: 'LouisGeorgeCafe-Light';
    font-size: 15px;
    line-height: 15px;
    width: 80%;
`

export const ContainerInfos = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const BoxInfo = styled.View`
  width: 98px;
  height: 60px;
  border: 2px solid;
  border-radius: 8px;
  gap: 2px;
`;

export const TextInfo = styled.Text`
    font-family: 'LouisGeorgeCafe';
    font-size: 12px;
    width: 100%;
    gap: 20px;
    height: 30px;;
    text-align: center;
`