import React from 'react';
import { styles } from '../styles/styles';
import { ConsFuncionarioProps } from '../navigation/HomeNavigator';
import { Funcionario } from '../types/Funcionario';
import { View, Text, Image, Switch, TextInput, Pressable, StyleSheet, Alert, FlatList } from 'react-native';
import firestore from "@react-native-firebase/firestore";
import { useState, useEffect } from "react";
const TelaConsFuncionario = (props: ConsFuncionarioProps) => {
   const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);

  useEffect(() => {
    const subscribe = firestore()
      .collection('funcionarios')
      .onSnapshot(querySnapshot => { 

        const data = querySnapshot.docs.map(doc => {
         
          return {
            id: doc.id,
            ...doc.data() 
          }

        }) as Funcionario[];

        setFuncionarios(data);
      });

    return () => subscribe();
  }, []);

  function deletarFuncionario(id: string) {
    firestore()
      .collection('funcionarios')
      .doc(id)
      .delete()
      .then(() => {
        Alert.alert("Funcionário", "Removido com sucesso")
      })
      .catch((error) => console.log(error));
  }

  function alterarNota(id: string) {
  }

  return (
    <View style={styles.tela}>

      <Text style={styles.tituloTela}>Listagem de Produtos</Text>
      <FlatList
        data={funcionarios}
        renderItem={(info) =>
          <ItemProduto
            numeroOrdem={info.index + 1}
            prod={info.item}
            onDeletar={deletarFuncionario}
            onAlterar={alterarNota} />} />


      <View
        style={styles.centralizar}>
        <Pressable
          style={[styles.botao, { width: '40%' }]}
          onPress={() => { props.navigation.goBack() }}>
          <Text style={styles.texto_botao}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}

type ItemProdutoProps = {
  numeroOrdem: number;
  prod: Funcionario;
  onDeletar: (id: string) => void;
  onAlterar: (id: string) => void;
}

const ItemProduto = (props: ItemProdutoProps) => {

  return (
    <View style={styles.card}>
      <View style={styles_local.dados_card}>
        <Text style={{ fontSize: 30, color: 'black' }}>
          {props.numeroOrdem + ' - ' + props.prod.nome}
        </Text>
        <Text style={{ fontSize: 20 }}>
          ID: {props.prod.id}
        </Text>
        <Text style={{ fontSize: 20 }}>
          E-mail: {props.prod.email}
        </Text>
        <Text style={{ fontSize: 20 }}>
          Telefone: {props.prod.telefone}
        </Text>
        <Text style={{ fontSize: 20 }}>
          Matricula: {props.prod.matricula}
        </Text>
        <Text style={{ fontSize: 20 }}>
          CPF: {props.prod.cpf}
        </Text>
      </View>

      <View
        style={styles_local.botoes_card}>
        <View style={styles_local.botao_deletar}>
          <Pressable
            onPress={() => props.onDeletar(props.prod.id)}>
            <Text style={styles_local.texto_botao_card}>
              X
            </Text>
          </Pressable>
        </View>

        <View style={styles_local.botao_alterar}>
          <Pressable
            onPress={() => props.onAlterar(props.prod.id)}>
            <Text style={styles_local.texto_botao_card}>
              A
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default TelaConsFuncionario;

const styles_local = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: 'grey',
    margin: 5,
    borderRadius: 10,
    padding: 3,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  dados_card: {
    flex: 1
  },
  botoes_card: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  botao_deletar: {
    backgroundColor: 'red',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao_alterar: {
    backgroundColor: 'yellow',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto_botao_card: {
    fontWeight: "bold",
    fontSize: 40,
    color: 'black'
  }
});

