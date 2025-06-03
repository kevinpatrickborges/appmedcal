import React from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { Video } from 'expo-av';

// Imagens dos slides
import CM260 from '../../assets/CM260.png';
import ZYBIOZ3 from '../../assets/ZYBIOZ3.png';
import PromoImage1 from '../../assets/promo1.png';

// Vídeo
const videoSource = require('../../assets/videos/cupom.mp4'); // Certifique-se de que o arquivo seja .mp4

const Main = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {/* Swiper */}
      <View style={{ height: 200, marginVertical: 20 }}>
        <Swiper
          showsButtons={false}
          autoplay={true}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
        >
        
          {/* Slide 4 - Vídeo */}
          <View style={styles.slide}>
            <Video
              source={videoSource}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              shouldPlay
              isLooping
              style={styles.video}
            />
          </View>
          {/* Slide 1 - Imagem */}
          <View style={styles.slide}>
            <Image source={CM260} style={styles.image} />
          </View>
          
          {/* Slide 2 - Imagem */}
          <View style={styles.slide}>
            <Image source={ZYBIOZ3} style={styles.image} />
          </View>

          {/* Slide 3 - Imagem */}
          <View style={styles.slide}>
            <Image source={PromoImage1} style={styles.image} />
          </View>

        </Swiper>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '90%',
    height: '100%',
    resizeMode: 'contain',
  },
  video: {
    width: '100%', // ajuste a largura para 100%
    height: '100%', // ajuste a altura para 100%
    borderRadius: 10,
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#0056A6',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
});

export default Main;
