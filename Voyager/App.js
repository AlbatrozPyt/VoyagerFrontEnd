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


export default function App() {
  return (
    <View style={styles.container}>
      <Header/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
