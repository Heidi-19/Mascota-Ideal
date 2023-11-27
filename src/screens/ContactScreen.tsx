/* eslint-disable no-trailing-spaces *//* eslint-disable prettier/prettier */
import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../themes/appThemes';
import { AuthContext } from '../context/AuthContext';
import LoginScreen from './LoginScreen';

export const ContactScreen = () => {

  //const {signIn, authState} = useContext(AuthContext)

  return (
    //<View >
      <View>
        <LoginScreen>
          
        </LoginScreen>
      </View>
      

       // {
         // !authState.isLoggedIn && <Button title='SignIn' onPress={signIn} />
        //}
        
  //  </View>
  )
}
