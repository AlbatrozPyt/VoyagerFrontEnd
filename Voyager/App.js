import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login/Login';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          title: 'Login'
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
