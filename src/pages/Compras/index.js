import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { CartContext } from '../context/contextcarrinho';
import { Ionicons } from 'react-native-vector-icons';
import Footer from '../../Components/Footer/index';
import pagamento from '../Pagamento/index';
const CartScreen = ({ navigation }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const increaseQuantity = (item) => {
    addToCart(item, true);
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      removeFromCart(item.id, true);
    } else {
      removeFromCart(item.id);
    }
  };

  const consolidatedCart = cart.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>
          Preço unitário: R$ {item.price.toFixed(2)}
        </Text>
        <Text style={styles.itemQuantity}>Quantidade: {item.quantity}</Text>
        <Text style={styles.totalPrice}>
          Total: R$ {(item.price * item.quantity).toFixed(2)}
        </Text>
      </View>

      <View style={styles.quantityControls}>
        <TouchableOpacity
          onPress={() => decreaseQuantity(item)}
          style={styles.quantityButton}>
          <Ionicons name="remove-circle-outline" size={24} color="#FF6F61" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => increaseQuantity(item)}
          style={styles.quantityButton}>
          <Ionicons name="add-circle-outline" size={24} color="#4CAF50" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => removeFromCart(item.id)}
        style={styles.removeButton}>
        <Ionicons name="trash-outline" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>
      {consolidatedCart.length === 0 ? (
        <Text style={styles.emptyCartText}>Seu carrinho está vazio.</Text>
      ) : (
        <FlatList
          data={consolidatedCart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total do Carrinho:</Text>
        <Text style={styles.totalAmount}>
          R${' '}
          {consolidatedCart
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </Text>
      </View>

      {consolidatedCart.length > 0 && (
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate('Pagamento')}>
          <Text style={styles.checkoutText}>Ir para Pagamento</Text>
        </TouchableOpacity>
      )}

      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    paddingBottom: 70,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2A3D66',
    marginBottom: 20,
    textAlign: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    color: '#2A3D66',
    fontWeight: '600',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#555',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2A3D66',
  },
  removeButton: {
    backgroundColor: '#FF6F61',
    padding: 10,
    borderRadius: 8,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    marginHorizontal: 5,
  },
  totalContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2A3D66',
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6F61',
  },
  checkoutButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  checkoutText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartScreen;
