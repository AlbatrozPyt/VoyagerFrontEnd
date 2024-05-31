import styled from "styled-components";

export const BoxIcon = styled.View.attrs({
  focus: true,
})`
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 2px solid;

  border-color:  ${props => props.tabBarActive !== "#fff" ? 'rgb(133, 48, 198)' : '#fff'};
  background-color: ${props => `${props.tabBarActive}`};
`;
