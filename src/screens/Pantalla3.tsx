import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const App = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
        <View>
            <Text style={{color: 'black', fontSize: 35, fontWeight: 'bold', margin: 20,marginTop: 30, marginBottom: 10, fontFamily: 'Muli'}}>
                Encuentra a tu nuevo mejor amigo
            </Text>
            <Text style={{color: '#8F8E8E', margin: 20, fontFamily: 'Muli',marginTop: 20, fontSize: 18}}>
                Te ayudaremos a elegir tu encantadora mascota. Adopta una mascota
            </Text>

            <Image style={{alignSelf: 'center', width: 300, alignContent: 'center',height: 420}} source={require('../components/img/pantalla3.png')} />

            <TouchableOpacity style={{backgroundColor: '#7A6BBC', padding: 5, width: 320, borderRadius: 50, alignItems: 'center',alignSelf: 'center', marginTop: 30}}>
            <Icon name="dog" size={10} color={'black'} />
            <Text style={{color: 'white', fontSize: 25, fontFamily: 'Poppins Medium', top: -7}}>
                Comenzar
            </Text>
        </TouchableOpacity>

        </View>
        
        
    </View>
    
  )
}

export default App;