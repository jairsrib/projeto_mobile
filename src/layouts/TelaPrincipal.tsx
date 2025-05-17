import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import Exemplo01 from '../components/Exemplo01';
import Exemplo1 from '../components/Exemplo1';
import Exemplo05_Text from '../components/Exemplo05_Text';
import Exemplo06_TextInput from '../components/Exemplo06_TextInput';
import Exemplo07_Image from '../components/Exemplo07_Image';
import Lista from '../components/Lista';
//Componente chamado TelaPrincipal que recebe 
//PrincipalProps 
//como parametro e constrói uma View com o componente 
//HelloWorld e Exemplo1 dentro

const TelaPrincipal = (props: PrincipalProps) => {

    return (
        <View style={[styles.tela, styles.centralizar]} >
            <Text style={styles.titulo1}>Tela Principal</Text>

            <Pressable onPress={() => { props.navigation.navigate('TelaNotas', { nota1: 10, nota2: 10, nome: 'Jair' }) }}>
                <Text style={styles.botaoNav}>Tela Notas</Text>
            </Pressable>

            <Pressable onPress={() => { props.navigation.navigate('TelaLista', { listapessoas: ['Jair'] }) }}>
                <Text style={styles.botaoNav}>Tela Lista</Text>
            </Pressable>

            <Pressable onPress={() => {
                const text = "Default Alert Text";
                props.navigation.navigate('TelaCampoDeTexto', { onClick: (text) => Alert.alert(text) })
            }}>
                <Text style={styles.botaoNav}>Tela Campo de Texto</Text>
            </Pressable>
            <Pressable onPress={() => { props.navigation.navigate('TelaCadCliente') }}>
                <Text style={styles.botaoNav}>Cadastro Cliente</Text>
            </Pressable>

            <Pressable onPress={() => { props.navigation.navigate('TelaConsCliente') }}>
                <Text style={styles.botaoNav}>Consulta Cliente</Text>
            </Pressable>
            <Pressable onPress={() => { props.navigation.navigate('TelaMenu') }}>
                <Text style={styles.botaoNav}>Menu</Text>
            </Pressable>

        </View >
    );
}


//exportando o componente TelaPrincipal para ficar visível para outros arquivos
export default TelaPrincipal;


