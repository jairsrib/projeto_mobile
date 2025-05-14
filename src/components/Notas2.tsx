import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import { styles } from '../styles/styles';
import { Double } from 'react-native/Libraries/Types/CodegenTypes';

type NotaProps = {
  nome: string;
  nota1: number;
  nota2: number;
}


const Notas2 = (props: NotaProps) => {
    function calcularMedia() {
        return (props.nota1 + props.nota2) / 2;
    }

    return (
        <View style={styles.tela}>
            <Text style={[styles.titulo1, styles.margemTop]}>Notas</Text>
            <Text style={[styles.titulo2, styles.margemTop]}>Nome: {props.nome}</Text>
            <Text style={[styles.titulo2, styles.margemTop]}>Nota 1: {props.nota1}</Text>
            <Text style={[styles.titulo2, styles.margemTop]}>Nota 2: {props.nota2}</Text>
            <Text style={[styles.titulo2, styles.margemTop]}>Média: {calcularMedia()}</Text>
            {
            calcularMedia() >= 7 ?
                <Text style={[styles.titulo2, styles.margemTop]}>Situação: Aprovado</Text>
: <Text style={[styles.titulo2, styles.margemTop]}>Situação: Reprovado</Text>
            }
            </View>
    );

}
export default Notas2;