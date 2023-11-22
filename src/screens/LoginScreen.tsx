/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
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
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerText}>Biemvenido a Mascota Ideal</Text>
        <Image
          style={styles.logo}
          source={require('https://eurofarma.com.br/storage/files/shutterstock_1625572492_611fa7b38eb42.jpg')} 
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
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#5DA1DE',
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
  },
  logo: {
    width: 80, 
    height: 100,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff',
  },
  box: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  createAccountText: {
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
