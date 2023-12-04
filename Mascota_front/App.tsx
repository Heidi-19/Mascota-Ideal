/* eslint-disable eol-last *//* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';

import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import { View } from 'react-native';
import { Pagina1 } from './src/screens/Pagina1';
import { CrearCuentaScreen } from './src/screens/CrearCuentaScreen';
import { SettingsScreen } from './src/screens/SettingScreen';
import BienvenidaScreen from './src/screens/BienvenidaScreen';
import { AgregarMascotaScreen } from './src/screens/AgregarMascotaScreen';




const App = () => {
  return(
    
      <View>
        <BienvenidaScreen />
        
        
      </View >
    );
};

export default App;