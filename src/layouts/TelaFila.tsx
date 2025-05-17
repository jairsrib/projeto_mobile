import { useState, useEffect } from "react";
import { Alert, Pressable, FlatList, StyleSheet, Text, View } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { FilaProps } from "../navigation/HomeNavigator";
import { Paciente } from "../types/Paciente";
import { styles } from "../styles/styles";

const TelaFila = (props: FilaProps) => {
  //cria a lista de produtos 
  const [pacientes, setPacientes] = useState<Paciente[]>([]);

  //O useEffect executa a função que for passada como parâmetro
  useEffect(() => {
    //Buscar os dados da tabela de produtos
    const subscribe = firestore()
      .collection('Pacientes')
      .onSnapshot(querySnapshot => { //A cada atualização dos dados no banco de dados é acionado o evento onSnapshot
        /*
        Os registros ficam em querySnapshot.docs eles são percorridos usando a função map
        onde para cada objeto na lista será armazenado o seu valor na variável doc
        e então executada uma função*/
        const data = querySnapshot.docs.map(doc => {
          /*Nessa função estão sendo retornados 1 objeto para cada item da lista de produtos
          cada objeto está sendo guardado na constante data, formando um array [] */
          return {
            id: doc.id,
            ...doc.data() //doc.data() está sendo decomposto para colocar os campo de produto lado a lado com o id
          }

        }) as Paciente[];

        //data contém a lista atualizada dos produtos, então é preenchido o state com data para atualizar a FlatList
        setPacientes(data);
      });

    return () => subscribe();
  }, []);


  return (
    <View style={styles.tela}>
      <Text style={styles.tituloTela}>Fila  </Text>
      <FlatList
        data={pacientes}
        renderItem={(info) =>
          <ItemProduto
            numeroOrdem={info.index + 1}
            prod={info.item}
            />} />
      <View
        style={styles.centralizar}>
        <Pressable
          style={[styles.botao, { width: '40%' }]}
          onPress={() => { props.navigation.goBack() }}>
          <Text style={styles.texto_botao}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}

type ItemProdutoProps = {
  numeroOrdem: number;
  prod: Paciente;
  
}




const ItemProduto = (props: ItemProdutoProps) => {
const { grau } = props.prod;

  const getCardColor = (grau: string) => {
    switch (grau) {
      case "1": return '#0000FF'; 
      case "2": return '#008000'; 
      case "3": return '#FFFF00'; 
      case "4": return '#FFA500'; 
      case "5": return '#FF0000'; 
      default: return '#ffffff'; 
    }
  };

  return (
    <View style={[styles.card, { backgroundColor: getCardColor(grau) }, { backgroundColor: getCardColor(grau) }]}>
      <View style={styles.dados_card}>
        <Text style={{ fontSize: 20 }}>
          ID: {props.prod.id}
        </Text>
        <Text style={{ fontSize: 30, color: 'black' }}>
          {props.prod.nome}
        </Text>
        <Text style={{ fontSize: 20 }}>
          Idade: {props.prod.idade}
        </Text>
        <Text style={{ fontSize: 20 }}>
          Efermidade: {props.prod.efermidade}
        </Text>
        <Text style={{ fontSize: 20 }}>
          Grau: {props.prod.grau}
        </Text>
      </View>
    </View>
  );
}

export default TelaFila;

