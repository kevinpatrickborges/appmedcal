// src/screens/WienerReagents.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const wienerReagentsData = [
  { id: '1', name: 'Creatinina', price: 200.00, image: require('../../../assets/promo1.png') },
  { id: '2', name: 'Ureia', price: 200.00, image: require('../../../assets/promo1.png') },
  { id: '3', name: 'Reagente Hemoglobina', price: 150.00, image: require('../../../assets/promo1.png') },
];

export default function WienerReagents({ navigation }) {
  const renderReagent = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ReagentDetails', { reagent: item })}>
      <Image source={item.image} style={styles.reagentImage} />
      <Text style={styles.reagentName}>{item.name}</Text>
      <Text style={styles.reagentPrice}>R$ {item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reagentes Wiener</Text>
      <FlatList
        data={wienerReagentsData}
        renderItem={renderReagent}
        keyExtractor={item => item.id}
      />
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
  },
  reagentImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  reagentName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reagentPrice: {
    fontSize: 14,
    color: '#0056A6',
  },
});