import { SafeAreaView, View } from "react-native";
import { BoxShadowUser, ContainerHeader, ContentUser, LogoHeader, UserImage, UserName } from "./style";
import DropShadow from "react-native-drop-shadow";


export const Header = ({ }) => {
  return (
    <ContainerHeader>

      <LogoHeader
        source={require('../../assets/images/VoyagerLogo.png')}
      />

      <ContentUser>
        <UserName>bem vindo</UserName>
        <UserName>Pedro</UserName>
      </ContentUser>


      <BoxShadowUser>
        <UserImage
          source={require('../../assets/images/pedro.png')}
        />
      </BoxShadowUser>
    </ContainerHeader>
  )
}
