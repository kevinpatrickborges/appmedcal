import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import * as animatable from 'react-native-animatable';
import { CartContext } from '../context/contextcarrinho';

import promo1 from '../../assets/promo1.png';

export default function ReagentDetails({ route }) {
  const { reagent } = route.params; // Recebe o reagente da navegação
  const { addToCart } = useContext(CartContext); // Usa o contexto do carrinho

  const ReagentDetails = {
    'Creatinina': {
      description: [  // Correção: Removido o ponto de interrogação
        {
          title: "Principais características",
          details: [
            { label: "Teste" },
            { label: "Teste" },
            { label: "Teste" },
            { label: "Teste" },
          ],
        },
        {
          title: "teste",
          details: [
            { label: "Teste" },
            { label: "Teste" },
            { label: "Teste" },
            { label: "Teste" },
          ],
        },
      ],
      characteristics: [
        { label: "Teste" },
        { label: "Teste" },
        { label: "Teste" },
        { label: "Teste" },
        { label: "Teste" },
      ],
      images: [
        promo1,
        promo1,
      ],
    },
  };

  return (
    <ScrollView style={styles.container}>
      {/* Supondo que a imagem seja acessada diretamente como `promo1` ou através de `reagent.image` */}
      <Image source={promo1} style={styles.image} />  {/* Aqui, coloque a imagem certa */}
      <Text style={styles.name}>{reagent.name}</Text>
      <Text style={styles.price}>R$ {reagent.price.toFixed(2)}</Text>
      {/* Aqui você pode adicionar mais detalhes sobre o reagente */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: '#FF6F61',
  },
});
