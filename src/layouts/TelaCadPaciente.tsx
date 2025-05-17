import React from 'react';
import { View, Text, Image, Switch, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { styles } from '../styles/styles';
import { useState } from "react";
import  firestore  from '@react-native-firebase/firestore';
import { CadPacienteProps } from '../navigation/HomeNavigator';
import { Paciente } from '../types/Paciente';

const TelaCadPaciente = (props: CadPacienteProps) => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [efermidade, setEfermidade] = useState('');
    const [grau, setGrau] = useState('');

  function cadastrar() {
    if (verificaCampos()) {
      let cliente =  {
        nome: nome,
        idade: idade,
        efermidade: efermidade,
        grau: grau
        } as Paciente;


      firestore()
        .collection('Pacientes')
        .add(cliente)
        .then(() => {
          Alert.alert("Paciente cadastrado com sucesso!");
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
        if(!idade){
            Alert.alert('Insira sua idade')
            return false;
        }   
        if(!efermidade){
            Alert.alert('De uma descrição sobre sua efermidade')
            return false;
        }  
        if(!grau){
            Alert.alert('Digite o quão urgente é.')
            return false;
        }  
        return true;      
    }

    return (
        <View style={styles.tela}>

            <View style={[styles.centralizar]}>
                <Text style={styles.titulo1}>Cadastro de Paciente</Text>
                <Image
                    source={require('../images/sick.png')}
                    style={[styles.imagem_200, styles.margemTop]}
                />

                <Text style={styles.titulo2}>Nome:</Text>
                <TextInput
                    value={nome}
                    style={[styles.caixa_texto, styles.largura_70]}
                    placeholder='Nome'
                    onChangeText={(text) => { 
                        setNome(text);
                    }}
                />
                <Text style={styles.titulo2}>Idade:</Text>
                <TextInput
                    value={idade}
                    style={[styles.caixa_texto, styles.largura_70]}
                    placeholder='Idade'
                    onChangeText={(text1) => { 
                        setIdade(text1);
                    }}
                />
                <Text style={styles.titulo2}>Sintomas:</Text>
                <TextInput
                    value={efermidade}
                    style={[styles.caixa_texto, styles.largura_70]}
                    placeholder='Descrição'
                    onChangeText={(text2) => { 
                        setEfermidade(text2);
                    }}
                />
                <Text style={styles.titulo2}>Grau:</Text>
                <TextInput
                    value={grau}
                    style={[styles.caixa_texto, styles.largura_70]}
                    placeholder='de 1 a 5'
                    onChangeText={(text3) => { 
                        setGrau(text3);
                    }}
                />
            </View>
            <View style={[styles.botoes, styles.margemTop]}>
                <Pressable
                    style={styles.botao_vermelho}
                    onPress={() => props.navigation.goBack()}>
                    <Text style={[styles.titulo2, styles.botao_vermelho]}>Voltar</Text>
                </Pressable>
                <Pressable
                    style={styles.botaoVerde}
                    onPress={() => {cadastrar()}}>
                    <Text style={[styles.titulo2, , styles.botaoVerde]}>Cadastro</Text>
                </Pressable>
                
            </View>

        </View>
    );
}
export default TelaCadPaciente;