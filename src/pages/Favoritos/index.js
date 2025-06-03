import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Footer from '../../Components/Footer/index';

const FavoritesScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState([
    { id: '1', name: 'Reagente XYZ', description: 'Reagente para análises clínicas' },
    { id: '2', name: 'Máquina ABC', description: 'Equipamento hospitalar de última geração' },
  ]);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
      <TouchableOpacity onPress={() => removeFavorite(item.id)} style={styles.removeButton}>
        <Ionicons name="trash" size={22} color="#D32F2F" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Favoritos</Text>
      </View>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum favorito adicionado.</Text>}
      />
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { backgroundColor: '#FFF', paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E0E0E0' },
  backButton: { marginRight: 15 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#2C3E50', flex: 1, textAlign: 'center' },
  listContainer: { padding: 20 },
  itemContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F7F7F7', padding: 15, borderRadius: 10, marginBottom: 10 },
  itemTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  itemDescription: { fontSize: 14, color: '#666' },
  removeButton: { padding: 10 },
  emptyText: { textAlign: 'center', fontSize: 16, color: '#999', marginTop: 20 },
});

export default FavoritesScreen;