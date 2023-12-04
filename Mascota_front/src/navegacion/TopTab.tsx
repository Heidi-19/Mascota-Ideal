/* eslint-disable react/no-unstable-nested-components *//* eslint-disable prettier/prettier */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Pagina1 } from '../screens/Pagina1';
import Pagina2 from '../screens/Pagina2';
import { UserProfile } from '../screens/UserProfile';


const Tab = createMaterialTopTabNavigator();

export const TopTab = () => {

    //para ios
    const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={({route}) =>({
            tabBarPressColor: 'blue',
            tabBarShowIcon: true, //Para visualizar iconos
            tabBarIndicatorStyle:{
                backgroundColor: 'blue',
            },
            tabBarStyle:{
                //ios
                shadowColor: 'transparent',
                //android
                elevation: 0
            },

            tabBarIcon: ({}) => {
                let iconName: string = '';
                switch (route.name) {
                  case 'ChatScreen':
                    iconName = 'chatbubble-ellipses-outline';
                    break;
       
                  case 'ContactScreen':
                    iconName = 'people-outline';
                    break;
       
                  case 'AlbumsScreen':
                    iconName = 'albums-outline';
                    break;
                }
                return <Icon name={iconName} size={20} color={'blue'} />;
              },
        })}
        //para ios
        style={{
            paddingTop: top
        }}
    >
      <Tab.Screen name="ChatScreen"  options={{ title: 'Chat'}} component={Pagina1} />
      <Tab.Screen name="ContactScreen"  options={{ title: 'Contact'}} component={Pagina2} />
      <Tab.Screen name="AlbumsScreen"  options={{ title: 'Albums'}} component={UserProfile} />
    </Tab.Navigator>
  );
}