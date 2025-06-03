import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function ProductDetails({ route }) {
  const { product } = route.params;

  // Adicione este console.log para verificar o parâmetro product
  console.log('Product passed to ProductDetails:', product);

  // Dados das descrições dos produtos
  const productDetails = {
    'Creatinina': {
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
    },
    // Adicione mais produtos e suas descrições conforme necessário
  };

  // Use o nome do produto para encontrar a descrição, se existir
  const details = productDetails[product?.name]?.description || [];

  return (
    <ScrollView style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>

      {details.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          {section.details.map((item, idx) => (
            <View key={idx} style={styles.detailRow}>
              <Text style={styles.detailLabel}>{item.label}:</Text>
              <Text style={styles.detailValue}>{item.value}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
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
  },
  detailValue: {
    marginLeft: 5,
       flexShrink: 1,
  },
});