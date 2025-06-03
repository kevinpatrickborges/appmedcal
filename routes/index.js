import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { Animated, Easing } from 'react-native';

import Welcome from '../src/pages/Welcome/index';
import Main from '../src/pages/Main/index';
import Compras from '../src/pages/Compras/index';
import ProductDetails from '../src/pages/Main/ProductDetails';
import Favoritos from '../src/pages/Favoritos/index';
import Notifica from '../src/pages/Notifica/index';
import Mais from '../src/pages/Mais/index';
import PromotionDetails from '../src/pages/Main/PromotionDetails';
import ReagentDetailsWiener from '../src/pages/Reagentes/Wiener/index';
import ReagentDetailsLaborlab from '../src/pages/Reagentes/Laborlab/index';
import ReagentDetailsApparat from '../src/pages/Reagentes/Apparat/index';
import TodosReagentes from '../src/pages/Reagentes/Todos/index';
import Pedidos from '../src/pages/Pedidos/index';
import SignIn from '../src/pages/SignIn/index';
import Acesso from '../src/pages/Acesso/index';
import Pagamento from '../src/pages/Pagamento/index';
import Perfil from '../src/pages/Mais/perfil';

const Stack = createNativeStackNavigator();

// Transição personalizada (DIVE)
const diveTransition = {
  cardStyleInterpolator: ({ current }) => {
    const translateY = current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [300, 0], // Move a tela de baixo para cima
    });
    const opacity = current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1], // Efeito de opacidade durante a transição
    });

    return {
      cardStyle: {
        transform: [{ translateY }],
        opacity,
      },
    };
  },
};

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          ...diveTransition, // Aplica a transição DIVE
        }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          ...diveTransition,
        }}
      />
      <Stack.Screen
        name="Notifica"
        component={Notifica}
        options={{
          ...diveTransition,
        }}
      />
      <Stack.Screen
        name="Mais"
        component={Mais}
        options={{
          ...diveTransition,
        }}
      />
      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{
          ...diveTransition,
        }}
      />
      <Stack.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          ...diveTransition,
        }}
      />
      <Stack.Screen
        name="Pedidos"
        component={Pedidos}
        options={{
          ...diveTransition,
        }}
      />
      <Stack.Screen
        name="Compras"
        component={Compras}
        options={{
          ...diveTransition,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          ...diveTransition,
        }}
      />
      <Stack.Screen
        name="Acesso"
        component={Acesso}
        options={{
          ...diveTransition,
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          ...diveTransition,
        }}
      />
      <Stack.Screen
        name="PromotionDetails"
        component={PromotionDetails}
        options={{
          ...diveTransition,
        }}
      />
      <Stack.Screen
        name="ReagentDetailsWiener"
        component={ReagentDetailsWiener}
        options={{
          ...diveTransition,
        }}
      />
      <Stack.Screen
        name="ReagentDetailsLaborlab"
        component={ReagentDetailsLaborlab}
        options={{
          ...diveTransition,
        }}
      />
      <Stack.Screen
        name="ReagentDetailsApparat"
        component={ReagentDetailsApparat}
        options={{
          ...diveTransition,
        }}
      />
      <Stack.Screen
        name="TodosReagentes"
        component={TodosReagentes}
        options={{
          ...diveTransition,
        }}
      />
      <Stack.Screen
        name="Pagamento"
        component={Pagamento}
        options={{
          ...diveTransition,
        }}
      />
    </Stack.Navigator>
  );
}
