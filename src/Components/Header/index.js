import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Location from 'expo-location';
import reagentsData from '../../pages/Reagentes/Todos';
import { productsData } from '../../Components/Dados/ProductData';

const Header = ({ navigation, searchTerm, setSearchTerm }) => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // Usando searchTerm e setSearchTerm passados como props
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão para acessar a localização foi negada.');
        Alert.alert('Permissão negada', 'Por favor, ative os serviços de localização.');
        return;
      }

      try {
        let loc = await Location.getCurrentPositionAsync({});
        setLocation(loc);
        let [geoAddress] = await Location.reverseGeocodeAsync({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
        });
        setAddress(
          `${geoAddress.street || ''}, ${geoAddress.city || ''} - ${geoAddress.region || ''}`
        );
      } catch (error) {
        setErrorMsg('Não foi possível obter a localização.');
        console.error(error);
      }
    })();
  }, []);

  const getAddress = () => {
    if (address) return address;
    if (errorMsg) return errorMsg;
    return 'Carregando localização...';
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
    if (text.trim() === '') {
      setFilteredProducts([]);
      return;
    }

    const allProducts = [...Object.values(reagentsData).flat(), ...productsData];
    const results = allProducts.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(results);
  };

  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleProductClick = (product) => {
    navigation.navigate('ProductDetails', { product });
    setSearchTerm(''); // Limpa a busca ao clicar
    setFilteredProducts([]); // Esconde a lista
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Image source={require('../../assets/logo2.png')} style={styles.logo} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Bem-vindo, Kevin</Text>
          <Text style={styles.locationText}>{getAddress()}</Text>
        </View>
        <TouchableOpacity
          style={styles.cartIcon}
          onPress={() => navigation.navigate('Compras')}
        >
          <Ionicons name="cart-outline" size={28} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBarContainer}>
        <Ionicons name="search-outline" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="O que você procura?"
          placeholderTextColor="#888"
          value={searchTerm}
          onChangeText={handleSearch}
        />
      </View>

      {filteredProducts.length > 0 && (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.productItem}
              onPress={() => handleProductClick(item)}
            >
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
            </TouchableOpacity>
          )}
          style={styles.resultsList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#2C3E50',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  locationText: {
    fontSize: 12,
    color: '#DDE4E9',
    marginTop: 3,
  },
  cartIcon: {
    padding: 5,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#34495E', // Tom mais claro que o fundo para integração
    borderRadius: 20,
    paddingHorizontal: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  resultsList: {
    marginTop: 10,
    maxHeight: 150,
    backgroundColor: '#34495E', // Fundo para destacar a lista
    borderRadius: 10,
    padding: 10,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#4A606D',
  },
  productImage: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 5,
  },
  productName: {
    flex: 1,
    fontSize: 14,
    color: '#FFF',
  },
  productPrice: {
    fontSize: 12,
    color: '#FF6F61', // Cor de destaque para preço
    fontWeight: 'bold',
  },
});

export default Header;