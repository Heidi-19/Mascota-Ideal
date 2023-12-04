/* eslint-disable react/self-closing-comp *//* eslint-disable prettier/prettier */
import React from 'react'
import { Button,Text, View } from 'react-native'

import { DrawerNavigationProp } from '@react-navigation/drawer';

interface Pagina1Props {
    navigation: DrawerNavigationProp<any, 'Pagina1'>;
}

export const Pagina1: React.FC<Pagina1Props> = ({ navigation }) => {
    return (
        <View>
            <Text>Screen A</Text>
            <Button
                title="Open Drawer"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    );
};
