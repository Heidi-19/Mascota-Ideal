/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//import { styles } from '../themes/appThemes';


export const CrearCuentaScreen = () => {
    const handlemascota = () => {
        //Acción cuando se presiona "Iniciar Sesion"
        Alert.alert('Bienvenido');

    };
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Bienvenido a Mascota Ideal</Text>
                    <Image
                        style={styles.logo}
                        source={require('../Mascota_front/src/assets/logocat-dog.jpg')}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.title}>Crea una nueva cuenta</Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='black'
                        placeholder="Nombre Completo"
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='black'
                        placeholder="Apellido Paterno"
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='black'
                        placeholder="Apellido Materno"
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='black'
                        placeholder="Edad"
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='black'
                        placeholder="Sexo"
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='black'
                        placeholder="Direccion"
                    />
                    <TouchableOpacity style={styles.button} onPress={handlemascota}>
                        <Text style={styles.buttonText}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    header: {
        marginTop: 30,
        alignItems: 'center',
    },

    logo: {
        borderRadius: 1000,
        width: 200,
        height: 200,
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#7A6ABA',
    },
    box: {
        width: '90%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.1)',
        alignItems: 'center',
    },
    title: {
        color: '#7A6ABA',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        color: 'black',
        width: '100%',
        height: 50,
        borderColor: '#7A6ABA',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
    },
    button: {
        backgroundColor: '#7A6ABA',
        padding: 20,
        borderRadius: 5,
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});