import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Button, TextInput, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function ScreenCreate() {
const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const rutas = useNavigation();


    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Title title="Crear Cuenta" titleStyle={styles.title} />
                <Card.Content>
                    <TextInput
                        label="Correo electrónico"
                        mode="outlined"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                    />
                    <TextInput
                        label="Contraseña"
                        mode="outlined"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        style={styles.input}
                    />
                    <Button
                        icon="login"
                        mode="contained"
                        onPress={() => rutas.push('menu')}
                        style={styles.button}

                    >
                        Iniciar sesión
                    </Button>
                    <Button
                        icon="account-plus"
                        mode="text"
                        onPress={() => rutas.push('createaccount')}
                        style={styles.link}
                    >
                        Crear cuenta
                    </Button>
                </Card.Content>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF2F5',
        justifyContent: 'center',
        padding: 20,
    },
    card: {
        padding: 16,
        borderRadius: 12,
        elevation: 4,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginTop: 8,
    },
    link: {
        marginTop: 4,
    },
});
