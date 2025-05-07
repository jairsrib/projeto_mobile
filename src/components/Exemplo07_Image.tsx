import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";

const Exemplo07_Image = () => {
    const url = 'https://reactnative.dev/docs/assets/p_cat2.png';

    return (
        <View>
            <Image
                source={require('../images/cliente.png')} //arquivo local      
                style={styles.imagem_200}/>
        </View>
    );
}

export default Exemplo07_Image;