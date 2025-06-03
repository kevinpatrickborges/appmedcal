import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes/index';
import { CartProvider } from './src/pages/context/contextcarrinho';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <CartProvider>
      <StatusBar backgroundColor="#38A69D" barStyle="light-content" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </CartProvider>
  );
}
