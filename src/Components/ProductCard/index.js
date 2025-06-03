// components/ProductCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as animatable from 'react-native-animatable';

const ProductCard = ({ product, onPress }) => {
  return (
    <animatable.View animation="fadeInUp" duration={500} style={styles.card}>
      <TouchableOpacity onPress={onPress}>
        <Image source={product.image} style={styles.image} />
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
      </TouchableOpacity>
    </animatable.View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
    color: '#333',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF6F61',
  },
});

export default ProductCard;