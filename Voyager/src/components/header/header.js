import { SafeAreaView, View } from "react-native";
import { BoxShadowUser, ContainerHeader, ContentUser, LogoHeader, UserImage, UserName } from "./style";
import DropShadow from "react-native-drop-shadow";


export const Header = ({ }) => {
  return (
    <ContainerHeader>

      <LogoHeader
        source={{ uri: `https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/VoyagerLogo.png?raw=true` }}
      />

      <ContentUser>
        <UserName>bem vindo</UserName>
        <UserName>Pedro</UserName>
      </ContentUser>


      <BoxShadowUser>
        <UserImage
          source={{ uri: `https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/pedro.png?raw=true` }}
        />
      </BoxShadowUser>
    </ContainerHeader>
  )
}
