/* eslint-disable eol-last *//* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';

import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CrearCuentaScreen } from './src/screens/CrearCuentaScreen';
import { SettingsScreen } from './src/screens/SettingScreen';
import BienvenidaScreen from './src/screens/BienvenidaScreen';
import { AgregarMascotaScreen } from './src/screens/AgregarMascotaScreen';
import { PrincipalScreen } from './src/screens/PrincipalScreen';
import { UserProfile } from './src/screens/UserProfile';
import Pagina2 from './src/screens/Pagina2';
import { Pagina1 } from './src/screens/Pagina1';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BienvenidaScreen'>
        <Stack.Screen name="Principal" component={PrincipalScreen}/>
        <Stack.Screen name="BienvenidaScreen" component={BienvenidaScreen}/>
        <Stack.Screen name="Pagina2" component={Pagina2} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Pagina1" component={Pagina1} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CrearCuenta" component={CrearCuentaScreen} />
      </Stack.Navigator>
     
    </NavigationContainer>
    );
};


export default App;