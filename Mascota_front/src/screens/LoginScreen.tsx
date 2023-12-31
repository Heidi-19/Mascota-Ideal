/* eslint-disable no-trailing-spaces *//* eslint-disable prettier/prettier */
//import { StackScreenProps } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
//import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

interface LoginProps {
  navigation: StackNavigationProp<any, 'Login'>;
}

const LoginScreen: React.FC<LoginProps> = ({ navigation }) => {
  //Definición de constantes username y password asignandoles usestate
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerText}>Bienvenido a Mascota Ideal</Text>
        <Image
          style={styles.logo}
          source={{uri: 'https://github.com/Heidi-19/Mascota-Ideal/blob/main/Mascota_front/src/assets/logocat-dog.jpg?raw=true'}} 
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Inicio de Sesión</Text>
        {/*Input para ingresar el nombre de usuario*/}
        <TextInput
          style={styles.input}
          placeholderTextColor='black'
          placeholder="Usuario"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        {/*Input para ingresar la contraseña */}
        <TextInput
          style={styles.input}
          placeholderTextColor='black'
          placeholder="Contraseña"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        {/*Boton para iniciar sesión*/}
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Principal')}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        {/*Hipervinculo para acceder a la pantalla CrearCuenta */}
        <TouchableOpacity style={styles.createAccountLink}  
        onPress={() => navigation.navigate('CrearCuenta')}>
          <Text style={styles.createAccountText}>¿No tienes una cuenta? Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
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
    width: '100%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
  },
  title: {
    color: '#7A6ABA',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
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
  createAccountText: {
    color: '#7A6ABA',
    fontSize: 16,
    textAlign: 'center',
  },
  createAccountLink: {
    marginTop: 20,
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;