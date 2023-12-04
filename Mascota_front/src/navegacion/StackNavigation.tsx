/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { UserProfile } from '../screens/UserProfile';
import { PrincipalScreen } from '../screens/PrincipalScreen';
import BienvenidaScreen from '../screens/BienvenidaScreen';
import Pagina2 from '../screens/Pagina2';
import { SettingsScreen } from '../screens/SettingScreen';
import { Pagina1 } from '../screens/Pagina1';
import LoginScreen from '../screens/LoginScreen';
import { CrearCuentaScreen } from '../screens/CrearCuentaScreen';

export type RootStackParam ={
    Pagina1: undefined,
    Pagina2: undefined,
    Settings: undefined,
    BienvenidaScreen:undefined,
    User:undefined,
    Principal:undefined,
    Login:undefined,
    CrearCuenta:undefined,
    PersonaScreen: {id: number, nombre: string}
  }

  const Stack = createStackNavigator<RootStackParam>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='BienvenidaScreen'
     screenOptions={{
        headerStyle:{
          elevation: 0,  //Android
          shadowColor: 'transparent',
        },
        cardStyle:{
          backgroundColor: 'white',
        },
      }}>
        <Stack.Screen name="User" component={UserProfile} />
        <Stack.Screen name="Principal" component={PrincipalScreen}/>
        <Stack.Screen name="BienvenidaScreen" component={BienvenidaScreen}/>
        <Stack.Screen name="Pagina2" component={Pagina2} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Pagina1" component={Pagina1} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CrearCuenta" component={CrearCuentaScreen} />
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}