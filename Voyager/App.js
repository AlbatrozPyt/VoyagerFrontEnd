import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

// Importar Navegação
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importar telas
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
