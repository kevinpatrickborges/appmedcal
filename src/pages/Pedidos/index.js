import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Footer from '../../Components/Footer/index';

const orders = [
  { id: '1', item: 'Reagente X', status: 'Enviado', date: '02/02/2025' },
  { id: '2', item: 'Máquina de Análise Y', status: 'Processando', date: '01/02/2025' },
  { id: '3', item: 'Reagente Z', status: 'Entregue', date: '30/01/2025' },
];

const OrderItem = ({ item }) => (
  <View style={styles.orderItem}>
    <Text style={styles.itemText}>{item.item}</Text>
    <Text style={styles.status}>{item.status}</Text>
    <Text style={styles.date}>{item.date}</Text>
  </View>
);

const OrdersScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Meus Pedidos</Text>
      </View>

      {/* Lista de pedidos */}
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderItem item={item} />}
        contentContainerStyle={styles.listContainer}
      />

      {/* Barra inferior */}
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
    flex: 1,
    textAlign: 'center',
  },
  listContainer: {
    padding: 20,
  },
  orderItem: {
    backgroundColor: '#F9F9F9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 16,
    color: '#3498db',
    marginTop: 5,
  },
  date: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
});

export default OrdersScreen;
