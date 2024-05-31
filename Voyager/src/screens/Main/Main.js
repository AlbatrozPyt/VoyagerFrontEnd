import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Home/Home";
import { BoxIcon } from "./style";
import { Image } from "react-native";
import { Perfil } from "../Perfil/Perfil";
import { Viagens } from "../Viagens/Viagens";

export const Main = () => {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { height: 60, borderTopWidth: 2, borderColor: "#000" },
        tabBarActiveBackgroundColor: "transparent",
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return (
              <BoxIcon
                tabBarActive={focused ? `rgba(133, 48, 198, .2)` : `#fff`}
              >
                <Image source={require("../../assets/images/icon-home.png")} />
              </BoxIcon>
            );
          }

          if (route.name === "Perfil") {
            return (
              <BoxIcon
                tabBarActive={focused ? `rgba(133, 48, 198, .2)` : `#fff`}
              >
                <Image
                  source={require("../../assets/images/icon-perfil.png")}
                />
              </BoxIcon>
            );
          }

          if (route.name === "Viagens") {
            return (
              <BoxIcon
                tabBarActive={focused ? `rgba(133, 48, 198, .2)` : `#fff`}
              >
                <Image
                  source={require("../../assets/images/icon-viagens.png")}
                />
              </BoxIcon>
            );
          }
        },
      })}
    >
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Viagens" component={Viagens} />
      <BottomTab.Screen name="Perfil" component={Perfil} />
    </BottomTab.Navigator>
  );
};
