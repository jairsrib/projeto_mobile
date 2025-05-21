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
    const selecionaFrase = (frase: string) => {
        setFraseSelecionada(frase);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Pressable onPress={() => { props.navigation.goBack() }}>
                <Text style={[styles.botaoNav]}>Voltar</Text>
            </Pressable>
            <TextInput
                style={[styles.caixa_texto, styles.centralizar, styles.bigMargemTop, styles.margemBot]}
                value={pessoa}
                onChangeText={setPessoa}
                placeholder="Digite o nome"
            />
            <Button

                title="Adicionar"
                onPress={adicionarPessoa} />
            <FlatList
            style={styles.margemTop}
                data={lista}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.item}
                        onPress={() => selecionaFrase(item)}>{item}

                    </Text>
                )}
            />
            <Text style={[styles.titulo1]}>Nome: {fraseSelecionada}</Text>

        </View>
    );
};
export default TelaLista;
