<<<<<<< HEAD
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login/Login';
=======
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from './src/components/header/header';
import * as Font from 'expo-font'


const VoyagerFonts = () => {
  return Font.loadAsync({
    'LouisGeorgeCafe': require('./src/assets/fonts/LouisGeorgeCafe.ttf'),
    'LouisGeorgeCafe-Bold': require('./assets/fonts/LouisGeorgeCafe-Bold.ttf'),
  });
};
>>>>>>> origin/Gabriel


export default function App() {

  const Stack = createStackNavigator();

  return (
<<<<<<< HEAD
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          title: 'Login'
        }}
      />
    </Stack.Navigator>
=======
    <View style={styles.container}>
      <Header/>

    </View>
>>>>>>> origin/Gabriel
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
