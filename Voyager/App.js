<<<<<<< HEAD
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

// Importar Navegação
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importar telas
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';
import { Cadastro } from './src/screens/Cadastro/Cadastro';
import { RecuperarSenha } from './src/screens/RecuperarSenha/RecuperarSenha';
import { VerificarCodigo } from './src/screens/VerificarCodigo/VerificarCodigo';
import { RedefinirSenha } from './src/screens/RedefinirSenha/RedefinirSenha';

// Instância do StackNavigator
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'LouisGeorgeCafe': require('./src/assets/fonts/LouisGeorgeCafe.ttf'),
    'LouisGeorgeCafe-Bold': require('./src/assets/fonts/LouisGeorgeCafe-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // ou qualquer outro indicador de carregamento, como uma tela de splash
  }

  return (
    // Envolve a estrutura da navegação
    <NavigationContainer>
      {/* Componente para navegação */}
      <Stack.Navigator initialRouteName="Navegacao">
        {/* Tela de Navegação */}
        <Stack.Screen
          // Nome da tela
          name="Navegacao"
          // Componente que será chamado
          component={Navegacao}
          // Título da tela
          options={{ title: "Navegação" }}
        />

        {/* Tela de Login */}
        <Stack.Screen
          // Nome da tela
          name="Login"
          // Componente que será chamado
          component={Login}
          // Título da tela
          options={{ title: "Login" }}
        />

        {/* Tela de Cadastro */}
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: "Cadastro" }}
        />

        {/* Tela de Recuperar Senha */}
        <Stack.Screen
          name="RecuperarSenha"
          component={RecuperarSenha}
          options={{ title: "RecuperarSenha" }}
        />

        {/* Tela de Verificar Codigo */}
        <Stack.Screen
          name="VerificarCodigo"
          component={VerificarCodigo}
          options={{ title: "VerificarCodigo" }}
        />

        {/* Tela de Redefinir Senha */}
        <Stack.Screen
          name="RedefinirSenha"
          component={RedefinirSenha}
          options={{ title: "RedefinirSenha" }}
=======
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
>>>>>>> origin/Matheus
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
<<<<<<< HEAD
=======

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
>>>>>>> origin/Matheus
