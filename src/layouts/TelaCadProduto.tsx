import React from 'react';
import { View, Text, Image, Switch, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { styles } from '../styles/styles';
import { useState } from "react";
import  firestore  from '@react-native-firebase/firestore';
import { CadProdutoProps } from '../navigation/HomeNavigator';
import { Produto } from '../types/Produto';

const TelaCadProduto = (props: CadProdutoProps) => {
    const [nome, setNome] = useState('');
    const [codigoBarras, setCodigoBarras] = useState('');
    const [preco, setPreco] = useState('');

  function cadastrar() {
    if (verificaCampos()) {
      let produto = {
          nome: nome,
          codigoBarras: codigoBarras,
          preco: Number(preco),
      } as Produto;


      firestore()
        .collection('produtos')
        .add(produto)
        .then(() => {
          Alert.alert(" Produto cadastrado com sucesso!");
          props.navigation.goBack();
        })
        .catch((error) => {
          Alert.alert("Erro", String(error));
        });
    }
  }

    function verificaCampos(){
        if(!nome){
            Alert.alert('Nome em branco! Digite um nome!')
            return false;
        }   
        if(!codigoBarras){
            Alert.alert('Sem código de barras!')
            return false;
        }   
        if(!preco){
            Alert.alert('Não foi definido valor!')
            return false;
        }  
        return true;      
    }

    return (
        <View style={styles.tela}>
            <View style={[styles.centralizar, stylesLocal.fundo]}>
                <Text style={styles.titulo1}>Cadastro de Produtos</Text>
                

                <Text style={styles.titulo2}>Nome:</Text>
                <TextInput
                    value={nome}
                    style={[styles.caixa_texto, styles.largura_70]}
                    placeholder='Nome'
                    onChangeText={(text) => { 
                        setNome(text);
                    }}
                />
                <Text style={styles.titulo2}>Código de Barras:</Text>
                <TextInput
                    value={codigoBarras}
                    style={[styles.caixa_texto, styles.largura_70]}
                    placeholder='Código de Barras'
                    onChangeText={(text1) => { 
                        setCodigoBarras(text1);
                    }}
                />
                <Text style={styles.titulo2}>Preço:</Text>
                <TextInput
                    value={preco}
                    style={[styles.caixa_texto, styles.largura_70]}
                    placeholder='Preço'
                    onChangeText={(text2) => { 
                        setPreco(text2);
                    }}
                />
                
            </View>
            <View style={[stylesLocal.botoes, styles.margemTop]}>
                <Pressable
                    style={stylesLocal.botaoCancelar}
                    onPress={() => props.navigation.goBack()}>
                    <Text style={[styles.titulo2, stylesLocal.textoCadastCanc]}>Voltar</Text>
                </Pressable>
                <Pressable
                    style={stylesLocal.botaoCadastrar}
                    onPress={() => {cadastrar()}}>
                    <Text style={[styles.titulo2, , stylesLocal.textoCadastCanc]}>Cadastro</Text>
                </Pressable>
                
            </View>

        </View>
    );
}
export default TelaCadProduto;

const stylesLocal = StyleSheet.create({
    tituloRadio: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 25,
    },
   
    textoCadastCanc: {
        color: 'white',
        fontSize: 25,
        marginTop: 5,
        width: 150,
        textAlign: 'center',
    },
    fundo: {
        backgroundColor: '#808080',
    },
    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#808080',
        //flex: 1,
    },
    botaoCancelar: {
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        justifyContent: 'center'
    },
    botaoCadastrar: {
        backgroundColor: 'green',
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        justifyContent: 'center'
    },
    botaoNav: {
        color: "white",
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10,
        textAlign: 'center',
    }
});

