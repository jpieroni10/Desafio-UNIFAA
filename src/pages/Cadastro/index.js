import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button, Style } from 'react-native';

import Titulo from '../../components/Titulo';
import MeuInput from '../../components/Input';
import SuperButton from '../../components/SuperButton';

function Cadastro({ navigation }) {
  return (
    <View style={styles.container}>

      <Titulo titulo="Cadastro"/>

      <MeuInput label="Nome" placeholder="Nome completo" />

      <MeuInput label="Endereço" placeholder="Rua, bairro, cidade" />

      <MeuInput label="E-mail" placeholder="e-mail@e-mail.com" />

      <MeuInput label="Senha" placeholder="1234abcd" />

      <SuperButton valor="Finalizar o cadastro" />

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

export default Cadastro;
