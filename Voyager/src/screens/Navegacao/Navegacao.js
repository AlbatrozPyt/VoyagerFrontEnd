import { Button, StyleSheet, View } from "react-native";

// Componente Navegacao
export const Navegacao = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 20, // Adiciona um pouco de espaço no topo
    alignItems: 'center'
  }
});

// Componente Login básico
export const Login = () => {
  return (
    <View style={styles.container}>
      <Button title="Voltar para Navegação" onPress={() => navigation.navigate("Navegacao")} />
    </View>
  );
};
