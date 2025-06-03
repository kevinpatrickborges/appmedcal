import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import * as animatable from 'react-native-animatable';
import { CartContext } from '../context/contextcarrinho';
import Footer from '../../Components/Footer/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CM250 from '../../assets/CM260.png';
import ZYBIOZ3 from '../../assets/ZYBIOZ3.png';
import zybioz5 from '../../assets/zybioz5.png';

const productDetails = {
  'Analisador Bioquimico CM250 Wiener': {
    description: [
      {
        title: "Principais características",
        details: [
          { label: "Velocidade", value: "Até 230 testes/hora" },
          { label: "Dimensões", value: "Largura 85 cm, altura 48 cm, profundidade 58 cm" },
          { label: "Peso bruto", value: "94 Kg" },
          { label: "Consumo de água", value: "< 1 L/h" },
        ],
      },
      {
        title: "Sistema de Medição",
        details: [
          { label: "Sistema de Pipetagem", value: "Sensor detector de nível líquido, sistema de lavagem interno e externo da agulha, sensor de choque, braço de reativos termostatizado" },
          { label: "Bandeja de reação", value: "80 cubetas de 0,6 cm de passo de luz, incubação por ar pré-aquecido (30ºC e 37ºC)" },
          { label: "Unidade de lavagem", value: "Automática lavadora de baldes de 5 passos com secagem, consumo de água: menos de 1 L/h" },
        ],
      },
    ],
    characteristics: [
      { label: "Tipo de Analisador", value: "Bioquímico" },
      { label: "Conectividade", value: "USB, Ethernet" },
      { label: "Garantia", value: "2 anos" },
      { label: "Manutenção", value: "Assistência técnica disponível" },
      { label: "Certificações", value: "ISO 13485, CE" },
      { label: "Cor", value: "Branco" },
    ],
    images: [CM250, CM250, CM250],
  },
};

export default function ProductDetails({ route, navigation }) {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);

  const { description = [], characteristics = [], images = [] } = productDetails[product?.name] || {};

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <FlatList
          data={images}
          horizontal
          renderItem={({ item }) => (
            <animatable.Image 
              source={item}
              style={styles.image} 
              animation="fadeIn"
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />

        <animatable.Text style={styles.name} animation="fadeInUp" delay={200}>
          {product.name}
        </animatable.Text>
        <animatable.Text style={styles.price} animation="fadeInUp" delay={400}>
          R$ {product.price.toFixed(2)}
        </animatable.Text>

        {description.map((section, index) => (
          <animatable.View key={index} style={styles.section} animation="fadeInUp" delay={600 + index * 200}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.details.map((item, idx) => (
              <View key={idx} style={styles.detailRow}>
                <Text style={styles.detailLabel}>{item.label}:</Text>
                <Text style={styles.detailValue}>{item.value}</Text>
              </View>
            ))}
          </animatable.View>
        ))}

        <View style={styles.characteristicsContainer}>
          <Text style={styles.characteristicsTitle}>Características Adicionais</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
            {characteristics.map((item, index) => (
              <View key={index} style={styles.characteristicCard}>
                <Text style={styles.characteristicLabel}>{item.label}</Text>
                <Text style={styles.characteristicValue}>{item.value}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </ScrollView>

      <Footer navigation={navigation} style={styles.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 60, // Evita sobreposição ao Footer
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginRight: 10,
    borderRadius: 10,
    elevation: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  price: {
    fontSize: 20,
    color: '#FF6F61',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#0066CC',
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detailLabel: {
    fontWeight: 'bold',
    color: '#555',
  },
  detailValue: {
    marginLeft: 5,
    flexShrink: 1,
    color: '#333',
  },
  characteristicsContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  characteristicsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0066CC',
  },
  scrollView: {
    paddingVertical: 10,
  },
  characteristicCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    elevation: 2,
    width: 120,
    alignItems: 'center',
  },
  characteristicLabel: {
    fontWeight: 'bold',
    color: '#333',
  },
  characteristicValue: {
    color: '#555',
  },
  button: {
    backgroundColor: '#FF6F61',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignSelf: 'center',
    marginTop: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
