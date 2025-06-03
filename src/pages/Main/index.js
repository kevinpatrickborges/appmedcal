import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import * as animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

// Componentes
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';
import HighlightSwiper from './HighlightSwiper';
import ProductCard from '../../Components/ProductCard/index';

// Dados
import { productsData } from '../../Components/Dados/ProductData/index';
import { promotionsData } from '../../Components/Dados/PromotionsData/index';
import { machinesData } from '../../Components/Dados/MachinesData/index';
import { reagentsData } from '../../Components/Dados/ReagentesData/index';

// Imagens
import CM260 from '../../assets/CM260.png';
import ZYBIOZ3 from '../../assets/ZYBIOZ3.png';
import PromoImage1 from '../../assets/promo1.png';

export default function Main() {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [visibleMachines, setVisibleMachines] = useState(4);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadingMoreProducts, setIsLoadingMoreProducts] = useState(false);
  const [isLoadingMoreMachines, setIsLoadingMoreMachines] = useState(false);

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderProduct = useCallback(
    ({ item }) => (
      <animatable.View animation="fadeInUp" duration={500}>
        <ProductCard
          product={item}
          onPress={() => navigation.navigate('ProductDetails', { product: item })}
        />
      </animatable.View>
    ),
    [navigation]
  );

  const renderReagent = useCallback(
    ({ item }) => (
      <animatable.View animation="fadeInUp" duration={500} style={styles.reagentCard}>
        <TouchableOpacity onPress={() => navigation.navigate('ReagentDetails', { reagent: item })}>
          <Image source={item.image} style={styles.reagentImage} />
          <Text style={styles.reagentName}>{item.name}</Text>
          <Text style={styles.reagentPrice}>R$ {item.price.toFixed(2)}</Text>
        </TouchableOpacity>
      </animatable.View>
    ),
    [navigation]
  );

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  }, []);

  const handleLoadMoreProducts = useCallback(() => {
    setIsLoadingMoreProducts(true);
    setVisibleProducts(prev => prev + 4);
    setTimeout(() => setIsLoadingMoreProducts(false), 500); // Simula carregamento
  }, []);

  const handleLoadMoreMachines = useCallback(() => {
    setIsLoadingMoreMachines(true);
    setVisibleMachines(prev => prev + 4);
    setTimeout(() => setIsLoadingMoreMachines(false), 500); // Simula carregamento
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        <Header navigation={navigation} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={onRefresh}
              colors={['#9Bd35A', '#689F38']}
              tintColor="#689F38"
              title="Atualizando..."
              titleColor="#000"
            />
          }
        >
          <HighlightSwiper />

          {/* Seção de Promoções */}
          <View style={styles.promotionsContainer}>
            <Text style={styles.promotionsTitle}>Promoções</Text>
            <FlatList
              data={promotionsData}
              renderItem={renderProduct}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.promotionsList}
            />
          </View>

          {/* Seção de Ofertas */}
          <Text style={styles.offersTitle}>Ofertas para você</Text>
          <FlatList
            data={filteredProducts.slice(0, visibleProducts)}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
            numColumns={2}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            onEndReached={handleLoadMoreProducts}
            onEndReachedThreshold={0.5}
            contentContainerStyle={styles.productList}
            ListFooterComponent={
              isLoadingMoreProducts ? <ActivityIndicator size="large" color="#0056A6" /> : null
            }
          />

          {/* Seção de Máquinas */}
          <Text style={styles.offersTitle}>Máquinas</Text>
          <FlatList
            data={machinesData.slice(0, visibleMachines)}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
            numColumns={2}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            onEndReached={handleLoadMoreMachines}
            onEndReachedThreshold={0.5}
            contentContainerStyle={styles.productList}
            ListFooterComponent={
              isLoadingMoreMachines ? <ActivityIndicator size="large" color="#0056A6" /> : null
            }
          />

          {/* Seção de Reagentes */}
          <Text style={styles.offersTitle}>Reagentes</Text>
          {Object.entries(reagentsData).map(([folder, reagents]) => (
            <View key={folder} style={styles.reagentsFolder}>
              <Text style={styles.reagentsTitle}>{folder}</Text>
              <FlatList
                data={reagents}
                renderItem={renderReagent}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.reagentsList}
              />
            </View>
          ))}
          <TouchableOpacity
            onPress={() => navigation.navigate('TodosReagentes')}
            style={styles.showMoreButton}
          >
            <Text style={styles.showMoreText}>Ver mais reagentes</Text>
          </TouchableOpacity>
        </ScrollView>
      
        <Footer navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 70,
  },
  promotionsContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  promotionsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0056A6',
  },
  promotionsList: {
    paddingLeft: 10,
  },
  offersTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0056A6',
    paddingHorizontal: 10,
  },
  productList: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  /*productCard: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderWidth: 0,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    borderRadius: 10,
  },
 /* productName: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF6F61',
  },
  */
  reagentsFolder: {
    marginVertical: 10,
  },
  reagentsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#0056A6',
    textAlign: 'center',
  },
  reagentsList: {
    paddingVertical: 10,
  },
  reagentCard: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    elevation: 2,
  },
  reagentImage: {
    width: 100,
    height: 100,
    resizeMode: 'center',
  },
  reagentName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  reagentPrice: {
    fontSize: 14,
    color: '#0056A6',
  },
  showMoreButton: {
    padding: 10,
    alignItems: 'center',
  },
  showMoreText: {
    color: '#0056A6',
    fontWeight: 'bold',
  },
});