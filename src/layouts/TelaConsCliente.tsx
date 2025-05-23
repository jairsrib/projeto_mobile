import { useState, useEffect } from "react";
import { Alert, Pressable, FlatList, StyleSheet, Text, View } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { ConsClienteProps } from "../navigation/HomeNavigator";
import { Cliente } from "../types/Cliente";
import { styles } from "../styles/styles";

const TelaConsCliente = (props: ConsClienteProps) => {
  //cria a lista de produtos 
  const [clientes, setClientes] = useState<Cliente[]>([]);

  //O useEffect executa a função que for passada como parâmetro
  useEffect(() => {
    //Buscar os dados da tabela de produtos
    const subscribe = firestore()
      .collection('clientes')
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

        }) as Cliente[];

        //data contém a lista atualizada dos produtos, então é preenchido o state com data para atualizar a FlatList
        setClientes(data);
      });

    return () => subscribe();
  }, []);

  function deletarCliente(id: string) {
    firestore()
      .collection('clientes')
      .doc(id)
      .delete()
      .then(() => {
        Alert.alert("Cliente", "Removido com sucesso")
      })
      .catch((error) => console.log(error));
  }

  function alterarNota(id: string) {
   // props.navigation.navigate("TelaAltProduto", { id: id })
  }

  return (
    <View style={styles.tela}>

      <Text style={styles.tituloTela}>Listagem de Produtos</Text>
      <FlatList
        data={clientes}
        renderItem={(info) =>
          <ItemProduto
            numeroOrdem={info.index + 1}
            prod={info.item}
            onDeletar={deletarCliente}
            onAlterar={alterarNota} />} />


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
  prod: Cliente;
  onDeletar: (id: string) => void;
  onAlterar: (id: string) => void;
}

const ItemProduto = (props: ItemProdutoProps) => {

  return (
    <View style={styles.card}>
      <View style={styles_local.dados_card}>
        <Text style={{ fontSize: 20 }}>
          ID: {props.prod.id}
        </Text>
        <Text style={{ fontSize: 30, color: 'black' }}>
          {props.prod.nome}
        </Text>
        <Text style={{ fontSize: 20 }}>
          E-mail: {props.prod.email}
        </Text>
        <Text style={{ fontSize: 20 }}>
          Telefone: {props.prod.telefone}
        </Text>
        <Text style={{ fontSize: 20 }}>
          Comorbidade: {props.prod.comorbidade}
        </Text>
      </View>

      <View
        style={styles_local.botoes_card}>
        <View style={styles_local.botao_deletar}>
          <Pressable
            onPress={() => props.onDeletar(props.prod.id)}>
            <Text style={styles_local.texto_botao_card}>
              X
            </Text>
          </Pressable>
        </View>

        <View style={styles_local.botao_alterar}>
          <Pressable
            onPress={() => props.onAlterar(props.prod.id)}>
            <Text style={styles_local.texto_botao_card}>
              A
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default TelaConsCliente;

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
