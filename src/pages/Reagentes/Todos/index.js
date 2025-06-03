// TodosReagentes.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Dados dos reagentes organizados por pastas
const reagentsData = {
  Wiener: [
    { id: '1', name: 'Creatinina', price: 200.00, image: require('../../../assets/promo1.png'), folder: 'Wiener' },
    { id: '2', name: 'Ureia', price: 200.00, image: require('../../../assets/promo1.png'), folder: 'Wiener' },
    { id: '3', name: 'Reagente Hemoglobina', price: 150.00, image: require('../../../assets/promo1.png'), folder: 'Wiener' },
  ],
  Laborlab: [
    { id: '1', name: 'Ácido Úrico', price: 200.00, image: require('../../../assets/promo1.png'), folder: 'Laborlab' },
    { id: '2', name: 'Glicose', price: 200.00, image: require('../../../assets/promo1.png'), folder: 'Laborlab' },
    { id: '3', name: 'Albumina', price: 180.00, image: require('../../../assets/promo1.png'), folder: 'Laborlab' },
  ],
  Apparat: [
    { id: '1', name: 'Reagente A', price: 250.00, image: require('../../../assets/promo1.png'), folder: 'Apparat' },
    { id: '2', name: 'Reagente B', price: 300.00, image: require('../../../assets/promo1.png'), folder: 'Apparat' },
    { id: '3', name: 'Reagente C', price: 350.00, image: require('../../../assets/promo1.png'), folder: 'Apparat' },
  ],
};

const ReagentItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.reagentItem}>
    <Image source={item.image} style={styles.reagentImage} />
    <View style={styles.textContainer}>
      <Text style={styles.reagentName}>{item.name}</Text>
      <Text style={styles.reagentPrice}>R$ {item.price.toFixed(2)}</Text>
    </View>
  </TouchableOpacity>
);

export default function TodosReagentes() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos os Reagentes</Text>
      <ScrollView contentContainerStyle={styles.reagentsList}>
        {Object.entries(reagentsData).map(([folder, reagents]) => (
          <View key={folder}>
            <Text style={styles.folderTitle}>{folder}</Text>
            {reagents.map(item => (
              <ReagentItem 
                key={`${item.id}_${folder}`}
                item={{...item, folder}}
                onPress={() => navigation.navigate('ReagentDetails', { reagent: item })}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0056A6',
  },
  reagentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  reagentImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  reagentName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reagentPrice: {
    fontSize: 14,
    color: '#0056A6',
  },
  reagentsList: {
    paddingBottom: 20,
  },
  folderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#0056A6',
  },
});
