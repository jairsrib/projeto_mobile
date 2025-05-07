import React, { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
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
const TelaPrincipal = (props: PrincipalProps) => {
  const [ativado, setAtivado] = useState(false);

  return (
    <View
      style={[styles.centralizar, styles.tela]}>
      <Exemplo07_Image />
      {/* <Exemplo1/> */}
      <Text style={styles.titulo1}>Nome</Text>
      <TextInput defaultValue='Digite seu nome' style={styles.caixa_texto} />
      <Text style={[styles.titulo2, styles.margem]}>E-mail</Text>
      <TextInput defaultValue='Digite seu e-mail' style={styles.caixa_texto}  />
      <Text style={[styles.titulo2, styles.margem]}>Telefone</Text>
      <TextInput defaultValue='Digite seu telefone' style={styles.caixa_texto} />
      <Text style={[styles.titulo2, styles.margem]}>Possui comorbidade?</Text>
      <Switch
        value={ativado} //valor
        onValueChange={(value) => { setAtivado(value) }} //evento
      />
      <View style={styles.botoes}> 
      <Pressable style={styles.botao_vermelho}>
          <Text style={styles.texto_botao}>Cancelar</Text>
        </Pressable>
        <Pressable style={styles.botao}>
        <Text style={styles.texto_botao}>Cadastrar</Text>
      </Pressable>
      </View>
      </View>

  );
}


//exportando o componente TelaPrincipal para ficar visível para outros arquivos
export default TelaPrincipal;
