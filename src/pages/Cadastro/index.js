// SignUp.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';


export default function SignUp() {
  const { registerUser, users } = useContext(UserContext);
  const navigation = useNavigation();
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  const handleSignUp = async () => {
    if (senha !== confirmSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    const existingUser = users.find(user => user.cnpj === cnpj);
    if (existingUser) {
      alert('CNPJ já cadastrado!');
      return;
    }

    await registerUser(cnpj, senha);
    alert('Cadastro realizado com sucesso!');
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Cadastro</Text>
      </animatable.View>
      <animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>CNPJ</Text>
        <TextInput placeholder="Digite seu CNPJ..." style={styles.input} value={cnpj} onChangeText={setCnpj} />
        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder="Digite sua senha..." style={styles.input} secureTextEntry value={senha} onChangeText={setSenha} />
        <Text style={styles.title}>Confirmar Senha</Text>
        <TextInput placeholder="Confirme sua senha..." style={styles.input} secureTextEntry value={confirmSenha} onChangeText={setConfirmSenha} />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  containerHeader: { marginTop: 40, marginBottom: 30, paddingStart: 30 },
  message: { fontSize: 30, fontWeight: 'bold', color: '#000' },
  containerForm: { backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingVertical: 30, paddingHorizontal: 30, flex: 1 },
  title: { fontSize: 18, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 10, marginBottom: 20 },
  button: { backgroundColor: '#1E90FF', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});
