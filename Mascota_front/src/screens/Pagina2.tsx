/* eslint-disable prettier/prettier */
// screens/ScreenB.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

interface Pagina2Props {
  navigation: StackNavigationProp<any, 'ScreenB'>;
}

const Pagina2: React.FC<Pagina2Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Screen B</Text>
      <Button
        title="Ir a Screen A"
        onPress={() => navigation.navigate('Pagina1')}
      />
    </View>
  );
};

export default Pagina2;
