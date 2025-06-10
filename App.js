import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navegacion from './Navegacion';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Navegacion />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(51, 56, 57, 1)', // Color de fondo
     // para evitar que se sobreponga con la barra de estado (opcional)
  },
});
