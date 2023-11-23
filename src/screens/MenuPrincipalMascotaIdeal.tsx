import React from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const MenuPrincipalMascotaIdeal = () => {
  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Icon name="paw-outline" size={24} color="#7A6ABA" />
        <Text style={styles.title}>MASCOTA IDEAL</Text>
      </View>

      {/* Buscador */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar mascotas"
          placeholderTextColor="#888"
        />
        <Icon name="search-outline" size={20} color="#888" />
      </View>

      {/* Deslizador horizontal */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalSlider}>
        <TouchableOpacity style={styles.horizontalButton}>
          <Image source={require('../assets/mascotas.jpg')} style={styles.buttonImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.horizontalButton}>
          <Image source={require('../assets/mascotas2.jpg')} style={styles.buttonImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.horizontalButton}>
          <Image source={require('../assets/mascotas3.jpg')} style={styles.buttonImage} />
        </TouchableOpacity>
        {/* Agrega más botones según sea necesario */}
      </ScrollView>

      {/* Botones de categorías */}
      <Text style={styles.categoryTitle}>Categorias</Text>
      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryButton}>
          <Image source={require('../assets/cat.png')} style={styles.categoryImage} />
          <Text style={styles.categoryButtonText}>Gatos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryButton}>
          <Image source={require('../assets/dog.png')} style={styles.categoryImage} />
          <Text style={styles.categoryButtonText}>Perros</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryButton}>
          <Image source={require('../assets/rabbit.png')} style={styles.categoryImage} />
          <Text style={styles.categoryButtonText}>Conejos</Text>
        </TouchableOpacity>

    </View>

      <View style={styles.container}>
      {/* Deslizador vertical de mascotas */}
      <ScrollView style={styles.verticalSlider}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.petImageContainer}>
          <View style={styles.innerPetImageContainer}>
            <Image source={require('../assets/cat1.png')} style={styles.petImage} />
            </View>
            <Text style={styles.petDescription}>Heidi</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.petImageContainer}>
          <View style={styles.innerPetImageContainer}>
            <Image source={require('../assets/cat2.png')} style={styles.petImage} />
            </View>
            <Text style={styles.petDescription}>Pablo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.petImageContainer}>
          <View style={styles.innerPetImageContainer}>
            <Image source={require('../assets/cat3.png')} style={styles.petImage} />
            </View>
            <Text style={styles.petDescription}>Nieve</Text>
          </TouchableOpacity>

          {/* Agrega más botones de mascotas según sea necesario */}
        </View>

        {/* Agrega más filas según sea necesario */}
      </ScrollView>
    </View>
    </View>
  );
};

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F6F6FE',
    minHeight: 150, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7A6ABA',
    textAlign: 'center',
    flex: 1, // Ocupa todo el espacio disponible
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    color: '#333',
  },
  horizontalSlider: {
    marginBottom: 0,
  },
  horizontalButton: {
    marginRight: 8,
  },
  buttonImage: {
    width: 400,
    height: 200,
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7A6ABA'
  },
  verticalSlider: {
    flex: 1,
  },
  petImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  petDescription: {
    marginTop: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  petImageContainer: {
    backgroundColor: '#FFF', // Fondo Mascotas, deslizador vertical
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    alignItems: 'center'
  },
  innerPetImageContainer: {
    backgroundColor: '#E2E2E2', // Fondo blanco
    borderRadius: 8,
    overflow: 'hidden',
    flex: 1, 
    margin: 5, // Margen para hacerlo más pequeño que el contenedor externo
  },
  categoryButton: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF', // Fondo del Fondo Mascotas, deslizador vertical
    borderRadius: 8,
    padding: 10,
    margin: 5,
  },
  categoryButtonText: {
    fontSize: 16,
    color: '#7A6BBC',
  },
});
