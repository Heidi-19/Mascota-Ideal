/* eslint-disable prettier/prettier */
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

//import { styles } from '../themes/appThemes';

interface CrearCuentaProps {
    navigation: StackNavigationProp<any, 'Crear Cuenta'>;
}

//Pantalla de crear cuenta
export const CrearCuentaScreen: React.FC<CrearCuentaProps> = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Bienvenido a Mascota Ideal</Text>
                    <Image
                        style={styles.logo}
                        source={{ uri: 'https://github.com/Heidi-19/Mascota-Ideal/blob/main/Mascota_front/src/assets/logocat-dog.jpg?raw=true' }}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.title}>Crea una nueva cuenta</Text>
                    {/*Input para ingresar el nombre*/}
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='black'
                        placeholder="Nombre Completo"
                    />
                    {/*Input para ingresar el Apellido paterno*/}
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='black'
                        placeholder="Apellido Paterno"
                    />
                    {/*Input para ingresar el Apellido Materno*/}
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='black'
                        placeholder="Apellido Materno"
                    />
                    {/*Input para ingresar la edad*/}
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='black'
                        placeholder="Edad"
                    />
                    {/*Input para ingresar el sexo*/}
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='black'
                        placeholder="Sexo"
                    />
                    {/*Input para ingresar el Estado*/}
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='black'
                        placeholder="Estado"
                    />
                    {/*Input para ingresar la ciudad*/}
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='black'
                        placeholder="Ciudad"
                    />
                    {/*Input para ingresar la colonia*/}
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='black'
                        placeholder="Colonia"
                    />
                    {/*Boton para registrarse y redirigir a la pantalla Principal*/}
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('Principal')}>
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
        width: 280,
        height: 280,
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