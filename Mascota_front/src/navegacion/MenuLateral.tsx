/* eslint-disable prettier/prettier */
import React from 'react';

import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { SettingsScreen } from '../screens/SettingScreen';
import { Image, View, TouchableOpacity, Text } from 'react-native';

import { Tabs } from './Tabs';




const Drawer = createDrawerNavigator();



export const MenuLateral = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="Tabs" options={{title:'Home'}}  component={Tabs}  />
      <Drawer.Screen name="SettingScreen" options={{title:'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}


const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
      <DrawerContentScrollView>
        {/* Parte del avatar */}
        <View style={styles.avatarContainer}>
          <Image 
            source={{
              uri: 'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg'
            }}
            style={styles.avatar}
          />
        </View>

        {/* Opciones de menú */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={{
              ...styles.menuBoton,
              flexDirection: 'row',
              
            }}
            onPress={() => navigation.navigate('Tabs')}
          >
            
            <Icon name="compass-outline" size={30} color={colores.primary} />
            <Text style={styles.menuTexto}> Navegación</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
              ...styles.menuBoton,
              flexDirection: 'row'
            }}
            onPress={() => navigation.navigate('SettingScreen')}
          >
                <Icon name="settings-outline" size={30} color={colores.primary} />
                <Text style={styles.menuTexto}> Ajustes</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    )
}

/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";

export const colores = {
    primary: '#5856D6'
};

export const styles = StyleSheet.create({
    marginGlobal:{
        marginHorizontal: 20
    },
    title: {
        color: 'black',
        fontSize: 30,
        marginBottom: 10
    },
    botonGrande:{
        width: 170,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        marginRight: 20,
        marginTop: 10,
        justifyContent: 'center'
    },
    textoBoton:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    avatarContainer:{
        alignItems: 'center',
        marginTop: 20
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    menuContainer:{
        marginVertical: 30,
        marginHorizontal: 20,
        // alignItems: 'center'
    },
    menuBoton:{
        marginVertical: 10
    },
    menuTexto:{
        fontSize: 20,
        color: colores.primary,
        opacity: 0.7
    }

    
});