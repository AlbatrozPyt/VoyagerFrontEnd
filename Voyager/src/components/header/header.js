import { View } from "react-native";
import { LogoVoyager } from "../Logo/style";
import { ContainerHeader } from "../container/style";
import { AvatarUser, BoxUser, Menu } from "./style";

export const Header = ({}) => {
  return (
    <View>
        
        <LogoVoyager source={(require("../../assets/images/VoyagerLogo.png"))}/>
        {/* <AvatarUser source={require("../../assets/images/Vectoravatar.png")}/>  
        <Menu source={require("../../assets/images/Vectormenu.png")}/>  */}
     
    </View>
  );
};
