// Removed duplicate import of Text
import { styles } from "../styles/styles";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { CampoDeTextoprops, Notasprops } from "../navigation/HomeNavigator";
import { useState } from "react";


const TelaCampoDeTexto = (props: CampoDeTextoprops ) => {
    const [text, setText] = useState(''); // Estado para armazenar o texto do campo de entrada

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
                style={[ styles.caixa_texto, styles.centralizar, styles.margemTop, styles.margemBot]}
                placeholder="Digite algo"
                value={text}
                onChangeText={setText} // Atualiza o estado com o texto digitado
            />
            <Pressable
                style={styles.botao}
                onPress={() => props.route.params.onClick && props.route.params.onClick(text)} // Chama a função passada como prop com o texto atual
            >
                <Text style={{ color: '#FFFFFF' }}>Clique</Text>
            </Pressable>
             <Pressable onPress={() => { props.navigation.goBack(); } }>
                    <Text style={[styles.botaoNav]}>Voltar</Text>
                </Pressable>
        </View>
    );
}

export default TelaCampoDeTexto;

