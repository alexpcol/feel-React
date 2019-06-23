import AES from 'react-native-aes-crypto';
import config from '../config/config';

export const generateKey = (password, salt) => AES.pbkdf2(password, salt);

export const encrypt = (text, keyBase64) => {
  const ivBase64 = config.get('aes:secret');
  return AES.encrypt(text, keyBase64, ivBase64)
    .then(cipher => ({ cipher, iv: ivBase64 }));
};

export const decrypt = (encryptedData, key) => AES.decrypt(encryptedData.cipher, key, encryptedData.iv);
