import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Main } from "./src/screens/Main/Main";
import { ViewPost } from "./src/screens/ViewPost/ViewPost";
import { ViagensFuturas } from "./src/screens/ViagensFuturas/ViagensFuturas";
import { Viagens } from "./src/screens/Viagens/Viagens";
import { HistoricoViagens } from "./src/screens/HistoricoViagens/HistoricoViagens";
import { ViagemAtual } from "./src/screens/ViagemAtual/ViagemAtual";
import { EditPerfil } from "./src/screens/EditPerfil/EditPerfil";

export default function App() {
  const Stack = createStackNavigator();

  const [fontsLoaded] = useFonts({
    "LouisGeorgeCafe-Bold": require("./src/assets/fonts/LouisGeorgeCafe-Bold.ttf"),
    LouisGeorgeCafe: require("./src/assets/fonts/LouisGeorgeCafe.ttf"),
    "LouisGeorgeCafe-Light": require("./src/assets/fonts/LouisGeorgeCafe-Light.ttf"),
    MoonGet: require("./src/assets/fonts/moon_get-Heavy.ttf"),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={Main}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ViewPost"
          component={ViewPost}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="EditPerfil"
          component={EditPerfil}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
