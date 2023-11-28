/* eslint-disable no-trailing-spaces *//* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticación
    if (username === 'usuario' && password === 'contraseña') {
      Alert.alert('Inicio de sesión exitoso');
    } else {
      Alert.alert('Inicio de sesión fallido');
    }
  };

  const handleCreateAccount = () => {
    // Acción cuando se presiona "Crear cuenta"
    Alert.alert('Crear cuenta presionado');
  };

  return (
    <View >
      <View style={styles.header}>
      <Text style={styles.headerText}>Bienvenido a Mascota Ideal</Text>
        <Image
          style={styles.logo}
          source={require('../assets/logocat-dog.jpg')} 
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Inicio de Sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createAccountLink} onPress={handleCreateAccount}>
          <Text style={styles.createAccountText}>¿No tienes una cuenta? Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    alignItems: 'center',
  },
  logo: {
    borderRadius: 100,
    width: 250, 
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
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    color: '#7A6ABA',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
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