import React from "react";
import { Pressable, Text, View } from "react-native";
import { NovaProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';

const TelaNova = (props: NovaProps) => {
    return (
        <View
        style={[styles.tela]}>
            <Text style={styles.titulo1}>Tela Nova</Text>
            <Pressable style={styles.botao}
            onPress={() => props.navigation.navigate('TelaPrincipal')}>
                <Text style={styles.titulo1}>Navegar</Text>
            </Pressable>
        </View>



    

        
);


}
export default TelaNova;