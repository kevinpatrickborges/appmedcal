// BottomTab.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTab = ({ navigation }) => {
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('Inicio')}>
          <Ionicons name="home-outline" size={30} color="#FFF" />
          <Text style={styles.bottomButtonText}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('Favoritos')}>
          <Ionicons name="heart-outline" size={30} color="#FFF" />
          <Text style={styles.bottomButtonText}>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('Notifica')}>
          <Ionicons name="notifications-outline" size={30} color="#FFF" />
          <Text style={styles.bottomButtonText}>Notificações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('Mais')}>
          <Ionicons name="menu-outline" size={30} color="#FFF" />
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
    backgroundColor: '#2C3E50',
    paddingVertical: 5,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
  },
  bottomButton: {
    alignItems: 'center',
  },
  bottomButtonText: {
    color: '#FFF',
    fontSize: 12,
  },
});

export default BottomTab;