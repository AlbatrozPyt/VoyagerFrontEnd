import {
  SafeAreaView,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";
import {
  BoxShadowUser,
  ContainerHeader,
  ContentUser,
  LogoHeader,
  UserImage,
  UserName,
} from "./style";
import DropShadow from "react-native-drop-shadow";

export const Header = ({ navigation, user }) => {
  return (
    <ContainerHeader>
      <LogoHeader
        source={{
          uri: `https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/VoyagerLogo.png?raw=true`,
        }}
      />

      <ContentUser>
        <UserName>bem vindo</UserName>
        <UserName>{user.name}</UserName>
      </ContentUser>

      <TouchableOpacity onPress={() => navigation.replace("Login")}>
        <BoxShadowUser>
          <UserImage
            source={{
              uri: user.foto,
            }}
          />
        </BoxShadowUser>
      </TouchableOpacity>
    </ContainerHeader>
  );
};
