import { StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';
import { Avatar, Card, Text, Button } from 'react-native-paper';
import { Icon, MD3Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import { estadoGlobal } from '../../context/contextData';

export default function ScreenHome() {

  const rutas = useNavigation();

  const {sumar, restar, contador} = useContext(estadoGlobal)

  console.log(contador);
  return (
    <View style={styles.body}>
      <Text style={styles.title}>ScreenHome</Text>
      <Card style={styles.cards}>
        <Icon
          source="lightbulb"
          color={'purple'}
          size={70}
        />

        <Button icon="arrow-right-thin" mode="contained" onPress={() => rutas.push('lucescasa')}>
          Press me
        </Button>
      </Card>

      <Card style={styles.cards}>
        <Icon
          source="door"
          color={'purple'}
          size={70}
        />

        <Button icon="arrow-right-thin" mode="contained" onPress={() => rutas.push('puertascasa')}>
          Press me
        </Button>
      </Card>

      <Card style={styles.cards}>
        <Icon
          source="details"
          color={'purple'}
          size={70}
        />

        <Button icon="arrow-right-thin" mode="contained">
          Press me
        </Button>
      </Card>

      <Card style={{ padding: 20, marginTop: 20 }}>
        <Text> Suma total: {contador}</Text>
        <Button onPress={()=>sumar()}>Sumar</Button>
        <Button onPress={()=>restar()}>Restar</Button>
      </Card>
    </View>

  );
}

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    padding: 40,
  },
  title: {
    color: 'rgb(255, 0, 0)',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  cards: {
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    borderColor: 'rgb(84, 0, 76)'
  },
});
