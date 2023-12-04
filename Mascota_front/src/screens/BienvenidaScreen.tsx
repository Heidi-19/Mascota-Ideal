/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native';

const BienvenidaScreen = () => {
  return(
    <SafeAreaView style={styles.container}>
    <View style={styles.hero}>
      <Image
        source={{uri:'https://github.com/Heidi-19/Mascota-Ideal/blob/main/Mascota_front/src/assets/pantalla3.png?raw=true'}}
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

     

      <TouchableOpacity
        onPress={() => {
          // handle onPress
        }}>
          <View style={styles.button}>
          <Text style={styles.buttonText}>Crear Cuenta</Text>
        </View>
        </TouchableOpacity>

        <View style={ { marginVertical: 8 } }/>
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
  )
}



const styles = StyleSheet.create({
    container: {
      backgroundColor:'#d8dffe',
    },
    hero: {
      backgroundColor: '#5856a9',
      margin: 12,
      borderRadius: 16,
      padding: 16,
    },
    heroImage: {
      width: '100%',
      height: 459,
    },
    content: {

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
      //distancia entre el texto y los botones
      paddingBottom: 40,
    },
    button: {
      backgroundColor: '#56409e',
      paddingVertical: 10,
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