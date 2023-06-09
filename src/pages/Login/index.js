import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button, Style } from 'react-native';

import Titulo from '../../components/Titulo';
import MeuInput from '../../components/Input';
import SuperButton from '../../components/SuperButton';

function Login({ navigation }) {
  return (
    <View style={styles.container}>

      <Titulo titulo="Login" />

      <MeuInput label="E-mail" placeholder="exemplo@exemplo.com" />

      <MeuInput label="Senha" placeholder="1234abcd" />

      <SuperButton valor="Entrar" />

      <SuperButton valor="Recuperar senha" />

      <Button
        title="Cadastrar usuário"
        onPress={() => navigation.navigate('Cadastro')}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Login;
