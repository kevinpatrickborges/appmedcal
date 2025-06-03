import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import * as animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function Welcome() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Main');
  };

  const handleGoogleLogin = () => {
    console.log('Login com Google');
    navigation.navigate('Main');
  };

  const handleAppleLogin = () => {
    console.log('Login com Apple');
    navigation.navigate('Main');
  };

  const handleFacebookLogin = () => {
    console.log('Login com Facebook');
    navigation.navigate('Main');
  };

  const handleGuestLogin = () => {
    console.log('Continuar como convidado');
    navigation.navigate('Main');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <animatable.View
        delay={500}
        animation="slideInUp"
        style={styles.formContainer}
      >
        <Text style={styles.title}>Bem-vindo à Medcal</Text>
        <Text style={styles.subtitle}>Entre com sua conta</Text>

        {/* Campo de Email */}
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Campo de Senha */}
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />

        {/* Botão de Login */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        {/* Divisor */}
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Ou continue com</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Container para botões sociais alinhados horizontalmente */}
        <View style={styles.socialButtonsContainer}>
          {/* Botão Google */}
          <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
            <Image
              source={{
                uri: 'https://img.icons8.com/color/48/000000/google-logo.png',
              }}
              style={styles.socialIcon}
            />
          </TouchableOpacity>

          {/* Botão Apple */}
          <TouchableOpacity style={styles.socialButton} onPress={handleAppleLogin}>
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-filled/50/000000/mac-os.png',
              }}
              style={styles.socialIcon}
            />
          </TouchableOpacity>

          {/* Botão Facebook */}
          <TouchableOpacity style={styles.socialButton} onPress={handleFacebookLogin}>
            <Image
              source={{
                uri: 'https://img.icons8.com/color/48/000000/facebook-new.png',
              }}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Continuar como Convidado */}
        <TouchableOpacity onPress={handleGuestLogin}>
          <Text style={styles.linkText}>Continuar como convidado</Text>
        </TouchableOpacity>
      </animatable.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C3E50', // Fundo azul escuro para destaque
  },
  formContainer: {
    width: '85%',
    padding: 20,
    backgroundColor: '#FFFFFF', // Fundo branco do formulário
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  button: {
    width: '100%',
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDD',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#666',
    fontSize: 14,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  socialButton: {
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  linkText: {
    color: '#007BFF',
    fontSize: 14,
    marginTop: 15,
  },
});