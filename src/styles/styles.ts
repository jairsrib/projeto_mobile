import { StyleSheet } from "react-native";

//o StyleSheet é a folha de estilo, equivalente ao css
const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#e6eeff'
    },
    tituloTela: {
        fontSize: 35,
        textAlign: 'center',
        color: 'black'
    },

    margemTop: {
        marginTop: 20
    },

    margemBot:{
        marginBottom: 20
    },

    margemLeft:{
        marginLeft: 10
    },

    item: {
        padding: 10,
        fontSize: 20,
        color: 'black',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        margin: 5
    },
    item2: {
        padding: 10,
        fontSize: 35,
        color: 'green',
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 10,
        margin: 5
    },

    titulo1: {
        marginTop: 40,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    titulo2: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10
    },
    botao_vermelho: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10
    },
    texto_botao: {
        fontSize: 20,
        color: 'white'
    },
    titulo_campos: {
        fontSize: 20,
        color: 'black'
    },
    caixa_texto: {
        width: '80%',
        height: 50,
        color: 'black',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 4,
        margin: 3,
        backgroundColor: 'white',
    },

    largura_70: {
        width: '70%'
    },

    imagem_200: {
        alignItems: 'center',
        width: 100,
        height: 100
    },

    card: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 15,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: 'white'
    },
    click: {
        opacity: 0.5
    },
    centralizar: {
        alignItems: 'center'
    },

    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '80%'
    },
});

export { styles };