/* eslint-disable react/no-unstable-nested-components *//* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Pagina1 } from '../screens/Pagina1';

import { StackNavigation } from './StackNavigation';
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
            tabBarActiveTintColor: 'blue',
            tabBarStyle: {
                borderTopColor: 'blue',
                borderTopWidth: 0,
                elevation: 0
            },
            tabBarLabelStyle:{
                fontSize: 15
            },
            
            tabBarIcon:() =>{

                let iconName: string = '';
                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = 'boat-outline';
                        break;
                    case 'Tab2Screen':
                        iconName = 'cash-outline';
                        break;
                    case 'StackNavigation':
                        iconName = 'cog-outline';
                        break;
                }
                return <Icon name={iconName} size={20} color={'blue'} />
            }
        })}
        sceneAnimationEnabled = {true}
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: 'blue' }}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Pagina1} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={TopTab} />
      <BottomTabAndroid.Screen name="StackNavigation" options={{title: 'Stack'}} component={StackNavigation} />
    </BottomTabAndroid.Navigator>
  );
}

//plataforma IOS
const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () =>{
  return (
    <BottomTabIOS.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}
        screenOptions={({route}) => ({
            tabBarActiveTintColor: 'blue',
            tabBarStyle: {
                borderTopColor: 'blue',
                borderTopWidth: 0,
                elevation: 0
            },
            tabBarLabelStyle:{
                fontSize: 15
            },
            tabBarIcon:() =>{

                let iconName: string = '';
                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = 'boat-outline';
                        break;
                    case 'Tab2Screen':
                        iconName = 'cash-outline';
                        break;
                    case 'StackNavigation':
                        iconName = 'cog-outline';
                        break;
                }
                return <Icon name={iconName} size={20} color={'blue'} />
            }
        })}
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Pagina1} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={TopTab} />
      <BottomTabIOS.Screen name="StackNavigation" options={{title: 'Stack'}} component={StackNavigation} />
    </BottomTabIOS.Navigator>
  );
}