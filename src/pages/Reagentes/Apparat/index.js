// src/screens/ApparatReagents.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const apparatReagentsData = [
  { id: '1', name: 'Reagente A', price: 250.00, image: require('../../../assets/promo1.png') },
  { id: '2', name: 'Reagente B', price: 300.00, image: require('../../../assets/promo1.png') },
  { id: '3', name: 'Reagente C', price: 350.00, image: require('../../../assets/promo1.png') },
];

export default function ApparatReagents({ navigation }) {
  const renderReagent = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ReagentDetails', { reagent: item })}>
      <Image source={item.image} style={styles.reagentImage} />
      <Text style={styles.reagentName}>{item.name}</Text>
      <Text style={styles.reagentPrice}>R$ {item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reagentes Apparat</Text>
      <FlatList
        data={apparateReagentsData}
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