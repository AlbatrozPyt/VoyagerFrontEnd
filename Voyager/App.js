import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import React, { createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Main } from "./src/screens/Main/Main";
import { ViewPost } from "./src/screens/ViewPost/ViewPost";
import { ViagensFuturas } from "./src/screens/ViagensFuturas/ViagensFuturas";
import { Viagens } from "./src/screens/Viagens/Viagens";
import { HistoricoViagens } from "./src/screens/HistoricoViagens/HistoricoViagens";
import { ViagemAtual } from "./src/screens/ViagemAtual/ViagemAtual";
import { EditPerfil } from "./src/screens/EditPerfil/EditPerfil";

import { Login } from "./src/screens/Login/Login";
import { Cadastro } from "./src/screens/Cadastro/Cadastro";
import { RecuperarSenha } from "./src/screens/RecuperarSenha/RecuperarSenha";
import { VerificarCodigo } from "./src/screens/VerificarCodigo/VerificarCodigo";
import { RedefinirSenha } from "./src/screens/RedefinirSenha/RedefinirSenha";
import { Navegacao } from "./src/screens/Navegacao/Navegacao";
import { MyProvider } from "./src/contexts/MyContext";

export default function App() {
  const Stack = createStackNavigator();

  const [fontsLoaded, fontError] = useFonts({
    "LouisGeorgeCafe-Bold": require("./src/assets/fonts/LouisGeorgeCafe-Bold.ttf"),
    LouisGeorgeCafe: require("./src/assets/fonts/LouisGeorgeCafe.ttf"),
    "LouisGeorgeCafe-Light": require("./src/assets/fonts/LouisGeorgeCafe-Light.ttf"),
    MoonGet: require("./src/assets/fonts/moon_get-Heavy.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <MyProvider >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />

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

          {/* Tela de Cadastro */}
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{ headerShown: false }}
          />

          {/* Tela de Recuperar Senha */}
          <Stack.Screen
            name="RecuperarSenha"
            component={RecuperarSenha}
            options={{ headerShown: false }}
          />

          {/* Tela de Verificar Codigo */}
          <Stack.Screen
            name="VerificarCodigo"
            component={VerificarCodigo}
            options={{ headerShown: false }}
          />

          {/* Tela de Redefinir Senha */}
          <Stack.Screen
            name="RedefinirSenha"
            component={RedefinirSenha}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MyProvider>
  );
}
