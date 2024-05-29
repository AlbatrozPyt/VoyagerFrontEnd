import styled from "styled-components/native";

// export const ContainerHeader = styled(LinearGradient).attrs({
//     colors: ["#8531C6", "#FF50E4"],
//     start: { x: -0.05, y: 1.08 },
//     end: { x: 1, y: 0 },
//   })`
//     width: 100%;
//     padding: 20px;
//     padding-bottom: 22px;
  
//     flex-direction: row;
//     align-items: center;
//     justify-content: space-between;
  
//     border-radius: 0px 0px 15px 15px;
//     box-shadow: 0px 4px 15px #00000014;
//   `;

  export const BoxUser = styled.View`
  gap: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;


export const AvatarUser = styled.Image`
   width: 60px;
  height: 60px;
  border-radius: 5px;
 `;

 export const TextDefault = styled.Text`
  font-size: 14px;
  font-family: "Quicksand_500Medium";
`;

export const NameUser = styled.Text`
  color: #fbfbfb;
  font-size: 16px;
  margin-top: 5px;
  font-family: "MontserratAlternates_600SemiBold";
`;

// export const Menu = styled.Image`
//   width: 30px;
//   height: 30px;
// `;

// export const HeaderView = styled.View`
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   padding-horizontal: 20px;
//   padding-top: 40px;
//   padding-bottom: 10px;
//   background-color: white;
// `;

// export const LogoVoyager = styled.Image`
//   width: 100px;
//   height: 40px;
//   resize-mode: contain;
// `;
