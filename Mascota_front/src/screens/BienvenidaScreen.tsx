/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BienvenidaScreen = () => {
    <SafeAreaView style={styles.container}>
    <View style={styles.hero}>
      <Image
        source={require('../assets/pantalla3.png')}
        style={styles.heroImage}
        resizeMode="contain"
      />
    </View>
    <View style={styles.content}>
      <View style={styles.contentHeader}>
        <Text style={styles.title}>
          Encuentra a tu nuevo mejor amigo en
          <View style={styles.appName}>
            <Text style={styles.appNameText}>Mascota Ideal</Text>
          </View>
        </Text>
        <Text style={styles.text}>
          Una aplicacion en donde podras ver y adoptar a animales en situacion
          de calle y a la cuales podras darle una mejor vida
        </Text>
      </View>

      <View style={ { marginVertical: 30 } }/>

      <TouchableOpacity
        onPress={() => {
          // handle onPress
        }}>
          <View style={styles.button}>
          <Text style={styles.buttonText}>Crear Cuenta</Text>
        </View>
        </TouchableOpacity>

        
        <TouchableOpacity
        onPress={() => {
          // handle onPress
        }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </View>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
}


const styles = StyleSheet.create({
    container: {
      backgroundColor:'#d8dffe',
      flex: 1,
    },
    hero: {
      backgroundColor: '#5856a9',
      margin: 12,
      borderRadius: 16,
      padding: 16,
    },
    heroImage: {
      width: '100%',
      height: 400,
    },
    content: {
      flex: 1,
      justifyContent: 'space-between',
      paddingVertical: 24,
      paddingHorizontal: 24,
    },
    contentHeader: {
      paddingHorizontal: 24,
    },
    title: {
      fontSize: 28,
      fontWeight: '500',
      color: '#281b52',
      textAlign: 'center',
      marginBottom: 15,
      lineHeight: 45,
    },
    appName: {
      backgroundColor: '#fff2dd',
      transform: [
        {
          rotate: '-5deg',
        },
      ],
      paddingHorizontal: 6,
    },
    appNameText: {
      fontSize: 25,
      fontWeight: '600',
      color: '#281b52',
    },
    text: {
      fontSize: 15,
      lineHeight: 24,
      fontWeight: '400',
      color: '#9992a7',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#56409e',
      paddingVertical: 12,
      paddingHorizontal: 14,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
    },
    buttonText: {
      fontSize: 15,
      fontWeight: '500',
      color: '#fff',
    },
  });

  export default BienvenidaScreen;