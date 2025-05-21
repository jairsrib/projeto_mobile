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
        
        <Pressable onPress={() => { props.navigation.navigate('TelaCadCliente')}}>
            <Text style={[styles.botaoNav, styles.botaoTelaCad]}>Cadastrar Cliente</Text>
        </Pressable>

        

        <Pressable onPress={() => { props.navigation.navigate('TelaCadFuncionario') }}>
            <Text style={[styles.botaoNav, styles.botaoTelaCad]}>Cadastrar Funcionário</Text>
        </Pressable>
        
        <Pressable onPress={() => { props.navigation.navigate('TelaCadProduto')}}>
            <Text style={[styles.botaoNav, styles.botaoTelaCad]}>Cadastrar Produto</Text>
        </Pressable>    

        <Pressable onPress={() => { props.navigation.navigate('TelaCadCategoria') }}>
            <Text style={[styles.botaoNav, styles.botaoTelaCad]}>Cadastrar Categoria</Text>
        </Pressable>

        <Pressable onPress={() => { props.navigation.navigate('TelaConsCliente')}}>
            <Text style={[styles.botaoNav, styles.botaoTelaCons]}>Consultar Cliente</Text>
        </Pressable>
        
        <Pressable onPress={() => { props.navigation.navigate('TelaConsFuncionario') }}>
            <Text style={[styles.botaoNav, styles.botaoTelaCons]}>Consultar Funcionário</Text>
        </Pressable>

        <Pressable onPress={() => { props.navigation.navigate('TelaConsProduto')}}>
            <Text style={[styles.botaoNav, styles.botaoTelaCons]}>Consultar Produto</Text>
        </Pressable>    

        <Pressable onPress={() => { props.navigation.navigate('TelaConsCategoria') }}>
            <Text style={[styles.botaoNav, styles.botaoTelaCons]}>Consultar Categoria</Text>
        </Pressable>

        </View >
    );
}


//exportando o componente TelaPrincipal para ficar visível para outros arquivos
export default TelaPrincipal;


