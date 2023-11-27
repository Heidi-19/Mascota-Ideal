/* eslint-disable prettier/prettier */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { MenuPrincipalMascotaIdeal } from '../screens/MenuPrincipalMascotaIdeal'; 
import { UserProfile } from '../screens/UserProfile';
//import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigation } from './StackNavigation';
import { colores } from '../themes/appThemes';
import { TopTab } from './TopTab';


export const Tabs = () =>{
    return Platform.OS === 'ios'
                ? <TabsIOS />
                : <TabsAndroid />
}

//Plataforma Android
const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
        screenOptions={({route}) => ({    
            tabBarActiveTintColor: colores.primary,
            tabBarStyle: {
                borderTopColor: colores.primary,
                borderTopWidth: 0,
                elevation: 0
            },
            tabBarLabelStyle:{
                fontSize: 15
            },
            
            tabBarIcon:({color, focused}) =>{

                let iconName: string = '';
                switch (route.name) {
                    case 'MenuPrincipalMascotaIdeal':
                        iconName = 'boat-outline';
                        break;
                    case 'Tab2Screen':
                        iconName = 'cash-outline';
                        break;
                    case 'UserProfile':
                        iconName = 'perfile-outline';
                        break;
                }
                return <Icon name={iconName} size={20} color={colores.primary} />
            }
        })}
        sceneAnimationEnabled = {true}
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: colores.primary }}
    >
      <BottomTabAndroid.Screen name="MenuPrincipalMascotaIdeal" options={{title: 'Tab1'}} component={MenuPrincipalMascotaIdeal} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={TopTab} />
      <BottomTabAndroid.Screen name="UserProfile" options={{ title: 'Profile' }} component={() => <UserProfile user={userObject} />}/>
     </BottomTabAndroid.Navigator>
  );
}

const userObject = {
    username: 'NombreDeUsuario',
    email: 'correo@ejemplo.com',
    avatar: 'perfil.jpg',
  };

//plataforma IOS
const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () =>{
  return (
    <BottomTabIOS.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}
        screenOptions={({route}) => ({
            tabBarActiveTintColor: colores.primary,
            tabBarStyle: {
                borderTopColor: colores.primary,
                borderTopWidth: 0,
                elevation: 0
            },
            tabBarLabelStyle:{
                fontSize: 15
            },
            tabBarIcon:({color, focused, size}) =>{

                let iconName: string = '';
                switch (route.name) {
                    case 'MenuPrincipalMascotaIdeal':
                        iconName = 'boat-outline';
                        break;
                    case 'Tab2Screen':
                            iconName = 'cash-outline';
                            break;
                    case 'UserProfile':
                        iconName = 'person-outline';
                        break;
                }
                return <Icon name={iconName} size={20} color={colores.primary} />
            }
        })}
    >
      <BottomTabIOS.Screen name="MenuPrincipalMascotaIdeal" options={{title: 'Tab1'}} component={MenuPrincipalMascotaIdeal} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={TopTab} />
      <BottomTabAndroid.Screen name="UserProfile" options={{ title: 'Profile' }} component={() => <UserProfile user={userObject} />}/>
    </BottomTabIOS.Navigator>
  );
}