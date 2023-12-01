/* eslint-disable react/react-in-jsx-scope *//* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, StyleSheet, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export const ChatScreen = () => {
const handlemascota = () => {
     //Acción cuando se presiona "Crear cuenta"
    Alert.alert('Mascota agregada');
    
  };

  
  return (
      <ScrollView>
       <View style={styles.container}>
       <View style={styles.header}>
       <Text style={styles.headerText}>Bienvenido a Mascota Ideal</Text>
         <Image
           style={styles.logo}
           source={require('../assets/logocat-dog.jpg')} 
         />
       </View>
       <View style={styles.box}>
         <Text style={styles.title}>Registro de mascota</Text>
         <TextInput
           style={styles.input}
           placeholderTextColor='black'
           placeholder="Nombre"
         />
         <TextInput
           style={styles.input}
           placeholderTextColor='black'
           placeholder="Peso"
         />
         <TextInput
           style={styles.input}
           placeholderTextColor='black'
           placeholder="Edad"
         />
         <TextInput
           style={styles.input}
           placeholderTextColor='black'
           placeholder="Raza"
         />
         <TextInput
           style={styles.input}
           placeholderTextColor='black'
           placeholder="Especie"
         />
         <TextInput
           style={styles.input}
           placeholderTextColor='black'
           placeholder="Caracteristicas"
         />
         <TextInput
           style={styles.input}
           placeholderTextColor='black'
           placeholder="Antecedentes"
         />
         <TextInput
           style={styles.input}
           placeholderTextColor='black'
           placeholder="Disponibilidad"
         />
         
         <TouchableOpacity style={styles.button} onPress={handlemascota}>
           <Text style={styles.buttonText}>Agregar mascota</Text>
         </TouchableOpacity>
       </View>
     </View>
    </ScrollView>
   );
  };
  
  const styles = StyleSheet.create({
   container: {
     justifyContent: 'flex-start',
     alignItems: 'center',
     backgroundColor: 'white',
   },
  
   header: {
     marginTop: 30,
     alignItems: 'center',
   },
  
   logo: {
     borderRadius: 1000,
     width: 200, 
     height: 200,
   },
   headerText: {
     fontSize: 25,
     fontWeight: 'bold',
     marginTop: 10,
     color: '#7A6ABA',
   },
   box: {
     width: '90%',
     padding: 20,
     borderRadius: 10,
     backgroundColor: 'rgba(0,0,0,0.1)',
     alignItems: 'center',
   },
   title: {
     color: '#7A6ABA',
     fontSize: 24,
     fontWeight: 'bold',
     marginBottom: 20,
   },
   input: {
     color: 'black',
     width: '100%',
     height: 50,
     borderColor: '#7A6ABA',
     borderWidth: 1,
     borderRadius: 5,
     marginBottom: 10,
     paddingLeft: 10,
   },
   button: {
     backgroundColor: '#7A6ABA',
     padding: 20,
     borderRadius: 5,
     width: '100%',
   },
   buttonText: {
     color: '#fff',
     fontSize: 20,
     fontWeight: 'bold',
     textAlign: 'center',
   },
});
