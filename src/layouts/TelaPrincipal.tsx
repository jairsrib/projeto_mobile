import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import Exemplo01 from '../components/Exemplo01';
import Exemplo1 from '../components/Exemplo1';
import Exemplo05_Text from '../components/Exemplo05_Text';
import Exemplo06_TextInput from '../components/Exemplo06_TextInput';
import Exemplo07_Image from '../components/Exemplo07_Image';
import Notas from '../components/Notas';
import Cadastro from '../components/Cadastro';
import CampoDeTexto from '../components/CampoDeTexto';
import Notas2 from '../components/Notas2';
import Lista from '../components/Lista';

//Componente chamado TelaPrincipal que recebe 
//PrincipalProps 
//como parametro e constrói uma View com o componente 
//HelloWorld e Exemplo1 dentro

const TelaPrincipal = (props: PrincipalProps) => {
  
  return (
    <View style={[styles.tela, styles.centralizar]}>
      <Lista listaPessoas={["artur", "pedro", "julia"]}  />

</View>
  );
}


//exportando o componente TelaPrincipal para ficar visível para outros arquivos
export default TelaPrincipal;
