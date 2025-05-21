import { Alert, Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

import { styles } from "../styles/styles";
import { Notasprops } from "../navigation/HomeNavigator";




const TelaNotas = (props: Notasprops) => {
    function calcularMedia() {
        return (props.route.params.nota1 + props.route.params.nota2) / 2;
    }
    return (
        <><View style={[styles.tela, styles.centralizar]}>
            <Text style={styles.titulo1}>Notas</Text>
            <Text style={styles.titulo2}>Nomes: {props.route.params.nome}</Text>
            <Text style={styles.titulo2}>Nota 1: {props.route.params.nota1}</Text>
            <Text style={styles.titulo2}>Nota 2: {props.route.params.nota2}</Text>
            <Text style={styles.titulo2}>Média: {calcularMedia()}</Text>
            {calcularMedia() >= 7 ? (
                <Text style={styles.titulo2}>Aprovado</Text>
            ) : (
                <Text style={styles.titulo2}>Reprovado</Text>
            )}
        </View>
        <View>
                <Pressable onPress={() => { props.navigation.goBack(); } }>
                    <Text style={[styles.botaoNav]}>Voltar</Text>
                </Pressable>
            </View></>
        
    );
}

export default TelaNotas;

