import React from "react";
import { Alert, Button, FlatList, Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

import { styles } from "../styles/styles";
import { useState } from "react";
import HomeNavigator, { Listaprops } from "../navigation/HomeNavigator";

const TelaLista = (props: Listaprops) => {
    const [pessoa, setPessoa] = useState('');
    const [lista, setLista] = useState(props.route.params.listapessoas);
    const [fraseSelecionada, setFraseSelecionada] = useState('')

    const adicionarPessoa = () => {
        if (pessoa.trim() !== '') {
            setLista([...lista, pessoa]);
            setPessoa('');
        }
    };
    const selecionaFrase = (frase : string) => {
        setFraseSelecionada(frase);
    }

    return (
        <View style={[styles.tela]}>
            <TextInput
                style={styles.caixa_texto}
                value={pessoa}
                onChangeText={setPessoa}
                placeholder="Digite o nome"
            />
            <Button title="Adicionar" onPress={adicionarPessoa} />
            <FlatList
                data={lista}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.item}
                    onPress={() => selecionaFrase(item)}>{item}
                    
                    </Text>
                )}
            />
            <Text style ={[styles.titulo1]}>Nome: {fraseSelecionada}</Text>
            <Pressable onPress={() => { props.navigation.goBack()}}>
                        <Text style={[stylesLocal.botaoNav]}>Voltar</Text>
        </Pressable>
        </View>
    );
};
export default TelaLista;
const stylesLocal = StyleSheet.create({
    centralizar: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoNav: {
        color: "white",
        justifyContent: 'center',
        alignItems:'center',
        width: 'auto',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10,
        textAlign: 'center'
    }
})