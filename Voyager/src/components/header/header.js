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
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import api from "../../service/Service";

export const Header = ({ navigation, user }) => {
  const [fotoPerfil, setFotoPerfil] = useState("")

  const BuscarFotoUsuario = async (id) => {
    await api.get(`/Usuarios/${id}`)
    .then(usuario => {
      setFotoPerfil(usuario.data.foto)
    }).catch(erro => console.log(erro))
  }

  useFocusEffect(useCallback(() => {
    BuscarFotoUsuario(user.jti)
  }, []))

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

      <TouchableOpacity>
        <BoxShadowUser>
          <UserImage
            source={{
              uri: fotoPerfil !== "" ? fotoPerfil : "https://voyagerblobstorage.blob.core.windows.net/voyagercontainerblob/user.png"
            }}
          />
        </BoxShadowUser>
      </TouchableOpacity>
    </ContainerHeader>
  );
};
