import React, { useEffect, useState } from 'react';
import { styles } from '../styles/styles';
import { ConsCategoriaProps } from '../navigation/HomeNavigator';
import { Categoria } from '../types/Categorias';
import { View, Text, Pressable, StyleSheet, Alert, FlatList } from 'react-native';
import firestore from "@react-native-firebase/firestore";

const TelaConsCategoria = (props: ConsCategoriaProps) => {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    useEffect(() => {
        const subscribe = firestore()
            .collection('categorias')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Categoria[];
                setCategorias(data);
            });

        return () => subscribe();
    }, []);

    function deletarCategoria(id: string) {
        firestore()
            .collection('categorias')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Categoria", "Removida com sucesso");
            })
            .catch((error) => console.log(error));
    }

    function alterarCategoria(id: string) {
        // Implementar lógica de alteração se necessário
    }

    return (
        <View style={styles.tela}>
            <Text style={styles.tituloTela}>Listagem de Categorias</Text>
            <FlatList
                data={categorias}
                keyExtractor={item => item.id}
                renderItem={(info) =>
                    <ItemCategoria
                        numeroOrdem={info.index + 1}
                        categoria={info.item}
                        onDeletar={deletarCategoria}
                        onAlterar={alterarCategoria}
                    />
                }
            />
            <View style={styles.centralizar}>
                <Pressable
                    style={[styles.botao, { width: '40%' }]}
                    onPress={() => { props.navigation.goBack() }}>
                    <Text style={styles.texto_botao}>Voltar</Text>
                </Pressable>
            </View>
        </View>
    );
}

type ItemCategoriaProps = {
    numeroOrdem: number;
    categoria: Categoria;
    onDeletar: (id: string) => void;
    onAlterar: (id: string) => void;
}

const ItemCategoria = (props: ItemCategoriaProps) => {
    return (
        <View style={styles_local.card}>
            <View style={styles_local.dados_card}>
                <Text style={{ fontSize: 30, color: 'black' }}>
                    {props.numeroOrdem + ' - ' + props.categoria.nome}
                </Text>
                <Text style={{ fontSize: 20 }}>
                    ID: {props.categoria.id}
                </Text>
            </View>
            <View style={styles_local.botoes_card}>
                <View style={styles_local.botao_deletar}>
                    <Pressable
                        onPress={() => props.onDeletar(props.categoria.id)}>
                        <Text style={styles_local.texto_botao_card}>
                            X
                        </Text>
                    </Pressable>
                </View>
                <View style={styles_local.botao_alterar}>
                    <Pressable
                        onPress={() => props.onAlterar(props.categoria.id)}>
                        <Text style={styles_local.texto_botao_card}>
                            A
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default TelaConsCategoria;

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