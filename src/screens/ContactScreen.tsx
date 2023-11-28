
/* eslint-disable no-trailing-spaces *//* eslint-disable prettier/prettier */
import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../themes/appThemes';
import { AuthContext } from '../context/AuthContext';
export const ContactScreen = () => {

  const {signIn, authState} = useContext(AuthContext)

  return (
    <View style={styles.marginGlobal}>
        <Text style= {styles.title}>Contact Screen</Text>

        {
          !authState.isLoggedIn && <Button title='SignIn' onPress={signIn} />
        }
        
    </View>
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
