import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/header/header';
import { ContainerHeader } from './src/components/container/style';

export default function App() {
  return (
    <View>
      <ContainerHeader>
        <Header/> 
      </ContainerHeader>
    </View>
  );
}

