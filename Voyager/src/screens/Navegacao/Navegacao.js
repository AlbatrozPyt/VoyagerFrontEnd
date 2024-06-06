import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Componente Navegação
export const Navegacao = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Cadastro")}>
        <Text style={styles.buttonText}>Cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("RecuperarSenha")}>
        <Text style={styles.buttonText}>RecuperarSenha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("VerificarCodigo")}>
        <Text style={styles.buttonText}>VerificarCodigo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("RedefinirSenha")}>
        <Text style={styles.buttonText}>RedefinirSenha</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#8531C6', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10, 
    borderRadius: 5,
    width: '80%'
  },
  buttonText: {
    color: 'white', 
    fontSize: 16,
    textAlign: 'center',
  },
});
