import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Main } from './src/screens/Main/Main';

export default function App() {

  const Stack = createStackNavigator();

  const [fontsLoaded] = useFonts({
    'LouisGeorgeCafe-Bold': require('./src/assets/fonts/LouisGeorgeCafe-Bold.ttf'),
    'LouisGeorgeCafe': require('./src/assets/fonts/LouisGeorgeCafe.ttf'),
    'LouisGeorgeCafe-Light': require('./src/assets/fonts/LouisGeorgeCafe-Light.ttf'),
    'MoonGet': require('./src/assets/fonts/moon_get-Heavy.ttf')
  })

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='main'
          component={Main}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
