import React from 'react'
import { Text,View, TouchableOpacity } from 'react-native'

const Pantalla5 = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>

      <View>
            <TouchableOpacity style={{borderColor: '#7A6BBC', borderStyle: 'solid', borderWidth: 1, alignSelf: 'center', padding: 5, width: 90, borderRadius: 50, alignItems: 'center', marginTop: 30}}>
              <Text style={{color: '#7A6BBC', fontWeight: 'bold', fontSize: 25}}>
                Volver
              </Text>
            </TouchableOpacity>
            <Text style={{color: '#7A6BBC', fontWeight: 'bold', fontSize: 25, alignSelf: 'center'}}>
                Gato
              </Text>
      </View>
      <View style={{margin: 32}}>
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 30}}>
            Olivia
        </Text>

        <Text style={{color: '#8F8E8E', fontWeight: 'bold', fontSize: 18}}>
            123 Algun lado St., Alguna ciudad
        </Text>
        <View style={{flexDirection: 'row', marginTop: 20,marginBottom: 20}}>
        <View>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
            Género
        </Text>
        <Text style={{color: '#7A6BBC', fontWeight: 'bold', fontSize: 18}}>
            Hembra  
        </Text>
        </View>
        <View>
        <View style={{left:50}}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
            Edad
        </Text>
        <Text style={{color: '#7A6BBC', fontWeight: 'bold', fontSize: 18}}>
            2 años
        </Text>
        </View>
        <View>
        <View style={{left:100}}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
            Peso
        </Text>
        <Text style={{color: '#7A6BBC', fontWeight: 'bold', fontSize: 18}}>
            22 Kg
        </Text>
        </View>
        </View>
        <View>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              Marceline
            </Text>
            <Text style={{color: '#8F8E8E', fontWeight: 'bold', fontSize: 17}}>
                Propietario
            </Text>
          </View>

          <View>
            <Text style={{color: '#8F8E8E', fontWeight: 'bold', fontSize: 15}}>
              ¿Estas buscando un nuevo amigo?
            </Text>
            <Text style={{color: '#8F8E8E', fontWeight: 'bold', fontSize: 15}}>
            Busque mascotas residentes cerca de usted y descubra los detalles de su adopción.
            </Text>

            <TouchableOpacity style={{backgroundColor: '#7A6BBC', alignSelf: 'center', padding: 5, width: 320, borderRadius: 5, alignItems: 'center', marginTop: 30}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>
                Adoptame
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
        

    </View>
  )
}


export default Pantalla5;