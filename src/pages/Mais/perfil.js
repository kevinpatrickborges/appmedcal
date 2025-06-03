import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Footer from '../../Components/Footer/index'; // Importando o Footer


const PerfilScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho simplificado com botão de voltar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mais</Text>
      </View>

      {/* Barra inferior com Footer */}
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#FFF',
    paddingVertical: 10, // Menos altura para o cabeçalho mais compacto
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0', // Linha de separação
  },
  backButton: {
    marginRight: 15, // Espaço entre o botão e o título
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
    flex: 1,
    textAlign: 'center',
  },
});

export default PerfilScreen;
