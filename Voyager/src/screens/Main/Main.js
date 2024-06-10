import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Home/Home";
import { BoxIcon } from "./style";
import { Image } from "react-native";
import { Perfil } from "../Perfil/Perfil";
import { Viagens } from "../Viagens/Viagens";
import { ViagensFuturas } from "../ViagensFuturas/ViagensFuturas";
import { HistoricoViagens } from "../HistoricoViagens/HistoricoViagens";
import { ViagemAtual } from "../ViagemAtual/ViagemAtual";
import { CadastrarViagem } from "../CadastrarViagem/CadastrarViagem";
import { CriarRotina } from "../CriarRotina/CriarRotina";
import { CriarPost } from "../CriarPost/CriarPost";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createContext, useEffect, useState, useContext } from "react";
import { DecodeToken } from "../../utils/Auth";
import { UserContext } from "../../contexts/MyContext";

export const Main = ({ route }) => {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        initialRouteName: "Home",
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
                <AntDesign name="home" size={30} color="#8531C6" />
              </BoxIcon>
            );
          }

          if (route.name === "Perfil") {
            return (
              <BoxIcon
                tabBarActive={focused ? `rgba(133, 48, 198, .2)` : `#fff`}
              >
                <AntDesign name="user" size={30} color="#8531C6" />
              </BoxIcon>
            );
          }

          if (route.name === "Viagens") {
            return (
              <BoxIcon
                tabBarActive={focused ? `rgba(133, 48, 198, .2)` : `#fff`}
              >
                <MaterialCommunityIcons
                  name="airplane-takeoff"
                  size={30}
                  color="#8531C6"
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

      <BottomTab.Screen
        name="ViagensFuturas"
        component={ViagensFuturas}
        options={{ tabBarButton: () => null }}
      />

      <BottomTab.Screen
        name="HistoricoViagens"
        component={HistoricoViagens}
        options={{ tabBarButton: () => null }}
      />

      <BottomTab.Screen
        name="ViagemAtual"
        component={ViagemAtual}
        options={{ tabBarButton: () => null }}
      />

      <BottomTab.Screen
        name="CadastrarViagem"
        component={CadastrarViagem}
        options={{ tabBarButton: () => null }}
      />

      <BottomTab.Screen
        name="CriarRotina"
        component={CriarRotina}
        options={{ tabBarButton: () => null }}
      />

      <BottomTab.Screen
        name="CriarPost"
        component={CriarPost}
        options={{ tabBarButton: () => null }}
      />
    </BottomTab.Navigator>
  );
};
