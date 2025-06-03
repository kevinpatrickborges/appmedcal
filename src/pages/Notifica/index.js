import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Footer from '../../Components/Footer/index';

const NotificationsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState([
    { id: '1', title: 'Promoção!', message: 'Aproveite 20% de desconto hoje.' },
    { id: '2', title: 'Seu pedido', message: 'Seu pedido #1234 foi enviado.' },
  ]);

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2C3E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notificações</Text>
        <TouchableOpacity onPress={handleClearNotifications} style={styles.clearButton}>
          <Text style={styles.clearText}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {notifications.length > 0 ? (
          <FlatList
            data={notifications}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.notificationItem}>
                <Text style={styles.notificationTitle}>{item.title}</Text>
                <Text style={styles.notificationMessage}>{item.message}</Text>
              </View>
            )}
          />
        ) : (
          <Text style={styles.noNotificationsText}>Você não tem notificações.</Text>
        )}
      </View>
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
    paddingVertical: 10,
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
  clearButton: {
    padding: 5,
  },
  clearText: {
    color: '#E74C3C',
    fontSize: 16,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  notificationItem: {
    backgroundColor: '#F7F7F7',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#555',
  },
  noNotificationsText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});

export default NotificationsScreen;