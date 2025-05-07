import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import { styles } from '../styles/styles';
import { Double } from 'react-native/Libraries/Types/CodegenTypes';

type NotaProps = {
  nome: string;
  nota1: number;
  nota2: number;
}


const Notas = (props: NotaProps) => {
    function calcularMedia() {
        return (props.nota1 + props.nota2) / 2;
    }
    function verificarAprovacao() {
        if (calcularMedia() >= 7) {
            return 'Aprovado';
        } else if (calcularMedia() >= 5) {
            return 'Recuperação';
        } else {
            return 'Reprovado';
        }
    }

    return (
        <View style={styles.tela}>
            <Text style={[styles.titulo1, styles.margem]}>Notas</Text>
            <Text style={[styles.titulo2, styles.margem]}>Nome: {props.nome}</Text>
            <Text style={[styles.titulo2, styles.margem]}>Nota 1: {props.nota1}</Text>
            <Text style={[styles.titulo2, styles.margem]}>Noaaa 2: {props.nota2}</Text>
            <Text style={[styles.titulo2, styles.margem]}>Média: {calcularMedia()}</Text>
            <Text style={[styles.titulo2, styles.margem]}>Situação: {verificarAprovacao()}</Text>
        </View>
    );

}
export default Notas;