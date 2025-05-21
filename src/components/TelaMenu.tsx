import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import { MenuProps } from '../navigation/HomeNavigator';

const TelaMenu = (props: MenuProps) => {

    return (
        <View style={[styles.tela, styles.centralizar]} >
            <Text style={styles.titulo1}>Menu</Text>
            <Pressable onPress={() => { props.navigation.navigate('TelaCadPaciente') }}>
                <Text style={styles.botaoNav}>Cadastro Paciente</Text>
            </Pressable>
            <Pressable onPress={() => { props.navigation.navigate('TelaFila') }}>
                <Text style={styles.botaoNav}>Fila</Text>
            </Pressable>
        </View>
    );

}
export default TelaMenu;