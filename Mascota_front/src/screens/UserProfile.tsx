/* eslint-disable prettier/prettier */

// UserProfile.tsx
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//const apiUrl = 'http://192.168.1.105:8080';

interface UserProps {
    navigation: StackNavigationProp<any, 'User'>;
  } 
// Definir una interfaz para el objeto 'user'


export const UserProfile: React.FC<UserProps> = ({ navigation }) => {
    return (
        <View style={styles.profile}>
            <Image
                alt=""
                source={{ uri: 'https://github.com/Heidi-19/Mascota-Ideal/blob/main/Mascota_front/src/assets/perfil.jpg?raw=true' }}
                style={styles.profileAvatar}
            />


            <Text style={styles.profileName}>John 117</Text>

            <Text style={styles.profileEmail}>masterchief@mail.com</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Settings')}>
                <View style={styles.profileAction}>
                    <Text style={styles.profileActionText}>Editar Perfil</Text>

                    <Icon name='create-outline' color="#fff" size={16} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    profileAvatar: {
        width: 160,
        height: 160,
        borderRadius: 9999,
    },
    profileName: {
        marginTop: 12,
        fontSize: 20,
        fontWeight: '600',
        color: '#090909',
    },
    profileEmail: {
        marginTop: 6,
        fontSize: 16,
        fontWeight: '400',
        color: '#848484',
    },
    profileAction: {
        marginTop: 12,
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007bff',
        borderRadius: 12,
    },
    profileActionText: {
        marginRight: 8,
        fontSize: 15,
        fontWeight: '600',
        color: '#fff',
    },
    profile: {
        //se quita el min cuando se ponga algo mas de titulo
        minHeight: 870,
        padding: 20,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e3e3e3',
    },
});
