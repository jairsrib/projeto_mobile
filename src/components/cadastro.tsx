import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import Exemplo01 from './Exemplo01';
import Exemplo1 from './Exemplo1';
import Exemplo05_Text from './Exemplo05_Text';
import Exemplo06_TextInput from './Exemplo06_TextInput';
import Exemplo07_Image from './Exemplo07_Image';

//Componente chamado TelaPrincipal que recebe 
//PrincipalProps 
//como parametro e constrói uma View com o componente 
//HelloWorld e Exemplo1 dentro

type StateProps={
  onClick: (texto: string) => void;
}
const Cadastro = () => {
  const [ativado, setAtivado] = useState('Não');    
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  let nomeVariavel = '' as string;
  let emailVariavel = '' as string;

  function exibirMensagem() {
      Alert.alert(
        'Valores',
        'Nome:' + nome +
        '\nE-mail:' + email +
        '\nTelefone:' + telefone +
        '\nComorbidade:' + ativado 
      )
    }
    function limparCampos() {
      setNome('');
      setEmail('');
      setTelefone('');
      setAtivado('Não');
    }


  return (
    <View
      style={[styles.centralizar, styles.tela]}>
      <Exemplo07_Image />
      {/* <Exemplo1/> */}
      <Text style={styles.titulo1}>Nome</Text>
      <TextInput value ={nome}
      onChangeText={(text) => { setNome(text)}}
      style ={[styles.caixa_texto, styles.largura_70, styles.centralizar]}
      placeholder='Nome'
       />
      <Text style={[styles.titulo2, styles.margem]}>E-mail</Text>
      <TextInput 
      value ={email}
      onChangeText={(text) => { setEmail(text)}}
      style ={[styles.caixa_texto, styles.largura_70, styles.centralizar]}
      placeholder='E-mail'
       />
      <Text style={[styles.titulo2, styles.margem]}>Telefone</Text>
      <TextInput 
      value ={telefone}
      onChangeText={(text) => { setTelefone(text)}}
      style ={[styles.caixa_texto, styles.largura_70, styles.centralizar]}
      placeholder='Telefone'
      
          />
      <Text style={[styles.titulo2, styles.margem]}>Possui comorbidade?</Text>
      <Switch
        value={ativado === 'Sim'} //valor
        onValueChange={(value) => { setAtivado(value ? 'Sim' : 'Não') }} //evento
      />
      <View style={styles.botoes}> 
      <Pressable style={styles.botao_vermelho}
        onPress={() => {limparCampos() }}>
          <Text style={styles.texto_botao}>Cancelar</Text>
        </Pressable>
        <Pressable style={styles.botao}
        onPress={() => {exibirMensagem() }}>
        <Text style={styles.texto_botao}>Cadastrar</Text>
        
      </Pressable>
      </View>
      </View>

  );
}


//exportando o componente TelaPrincipal para ficar visível para outros arquivos
export default Cadastro;
