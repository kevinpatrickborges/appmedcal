// utils/crypto.js
import CryptoJS from 'crypto-js';

// Função para criptografar senhas
export const encryptPassword = (password) => {
  return CryptoJS.AES.encrypt(password, 'chave-secreta').toString();
};

// Função para descriptografar senhas
export const decryptPassword = (encryptedPassword) => {
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, 'chave-secreta');
  return bytes.toString(CryptoJS.enc.Utf8);
};
