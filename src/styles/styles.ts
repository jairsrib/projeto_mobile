import { StyleSheet } from "react-native";

//o StyleSheet é a folha de estilo, equivalente ao css
const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#808080'
    },
    tituloTela: {
        fontSize: 35,
        textAlign: 'center',
        color: 'black'
    },
    botaoTelaCad:{
        backgroundColor: '#0047ab',
        fontSize: 20
    },
    botaoTelaCons:{
        backgroundColor: '#9b111e',
        fontSize: 20
    },
    margemTop: {
        marginTop: 20
    },

    bigMargemTop: {
        marginTop: 200
    },

    margemBot: {
        marginBottom: 20
    },

    margemLeft: {
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
    botaoVerde: {
        backgroundColor: 'green',
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        justifyContent: 'center'
    },
    tituloRadio: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: 25,
    },
    botao_vermelho: {
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        justifyContent: 'center'
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
    botaoNav: {
        color: "white",
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10,
        textAlign: 'center'
    },

    largura_70: {
        width: '70%'
    },

    imagem_200: {
        alignItems: 'center',
        width: 100,
        height: 100
    },

    
    click: {
        opacity: 0.5
    },
    centralizar: {
        alignItems: 'center'
    },

    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
    },

    botao_deletar: {
        backgroundColor: 'red',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fundo: {
        backgroundColor: '#D3D3D3',
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
    },
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
  
});

export { styles };