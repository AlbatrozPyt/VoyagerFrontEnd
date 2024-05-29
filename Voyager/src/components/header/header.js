import { SafeAreaView, View } from "react-native";
import { LogoVoyager } from "../Logo/style";
import { ContainerHeader } from "../container/style";
import { AvatarUser, BoxUser, HeaderView, Menu, TextDefault } from "./style";

export const Header = ({ }) => {
  return (
    <ContainerHeader>
      <BoxUser>
        <AvatarUser
         source={require('../../assets/images/pedro.png')}
        />
        <DataUser>
          <TextDefault>Bem vind </TextDefault>
          <NameUser>Pedro</NameUser>
        </DataUser>
      </BoxUser>

    </ContainerHeader>
  );
};
