import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.navigate('Main')}
        >
          <Ionicons name="home-outline" size={24} color="#555" />
          <Text style={styles.bottomButtonText}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.navigate('Favoritos')} // Ícone de Favoritos
        >
          <Ionicons name="heart-outline" size={24} color="#555" />
          <Text style={styles.bottomButtonText}>Favoritos</Text>
        </TouchableOpacity>

        {/* Novo ícone de Pedidos, sem o contorno amarelo */}
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.navigate('Pedidos')} // Ação para a tela de Pedidos
        >
          <Ionicons name="list-outline" size={24} color="#555" /> {/* Ícone de pedidos */}
          <Text style={styles.bottomButtonText}>Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.navigate('Notifica')}
        >
          <Ionicons name="notifications-outline" size={24} color="#555" />
          <Text style={styles.bottomButtonText}>Notificações</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.navigate('Mais')}
        >
          <Ionicons name="menu-outline" size={24} color="#555" />
          <Text style={styles.bottomButtonText}>Mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    height: 50, // Altura reduzida
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
  bottomButton: {
    alignItems: 'center',
  },
  bottomButtonText: {
    color: '#555',
    fontSize: 10, // Tamanho de fonte reduzido
    marginTop: 4,
  },
});

export default Footer;
