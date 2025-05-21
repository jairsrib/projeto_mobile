import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaCadCliente from "../layouts/TelaCadCliente";
import TelaCadFuncionario from "../layouts/TelaCadFuncionario";
import TelaCadProduto from "../layouts/TelaCadProduto";
import TelaCadCategoria from "../layouts/TelaCadCategoria";
import TelaConsCliente from "../layouts/TelaConsCliente";
import TelaConsFuncionario from "../layouts/TelaConsFuncionario";
import TelaConsProduto from "../layouts/TelaConsProduto";
import TelaConsCategoria from "../layouts/TelaConsCategoria";

//Define quais as telas e os parâmetros de cada tela
type RootStackParamList = {
  TelaPrincipal: undefined;
  TelaNotas: { nota1: number, nota2: number, nome: string };
  TelaCampoDeTexto: { onClick: (text: string) => void };
  TelaLista: { listapessoas: string[] };

  TelaCadCliente: undefined;
  TelaCadFuncionario: undefined;
  TelaCadProduto: undefined;
  TelaCadCategoria: undefined;

  TelaConsCliente: undefined;
  TelaConsFuncionario: undefined;
  TelaConsProduto: undefined;
  TelaConsCategoria: undefined;
};

//Cria a Stack (tipo de navegação onde as telas estão em uma "pilha")
//com o RootStackParamList definindo as telas da stack
const Stack = createNativeStackNavigator<RootStackParamList>();

//Cria o navegador da pilha
const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TelaPrincipal" //nome da tela inicial
      screenOptions={{ headerShown: false }} //headerShown define se o cabeçalho irá ser exibido
    >

      {/* define uma te la dando um nome(igual ao RootStackParamList) e qual o componente será carregado */}
      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
      <Stack.Screen name="TelaCadCliente" component={TelaCadCliente} />
      <Stack.Screen name="TelaCadFuncionario" component={TelaCadFuncionario} />
      <Stack.Screen name="TelaCadProduto" component={TelaCadProduto} />
      <Stack.Screen name="TelaCadCategoria" component={TelaCadCategoria} />

      <Stack.Screen name="TelaConsCliente" component={TelaConsCliente} />
      <Stack.Screen name="TelaConsFuncionario" component={TelaConsFuncionario} />
      <Stack.Screen name="TelaConsProduto" component={TelaConsProduto} />
      <Stack.Screen name="TelaConsCategoria" component={TelaConsCategoria} />
    </Stack.Navigator>
  );
}

//cria as propriedades da TelaPrincipal, que nesse caso é undefined
//essas propriedades são usadas lá em layouts/TelaPincipal.tsx
type PrincipalProps = NativeStackScreenProps<RootStackParamList,
  'TelaPrincipal'>;

type CadClienteProps = NativeStackScreenProps<RootStackParamList,
  'TelaCadCliente'>;

type CadFuncionarioProps = NativeStackScreenProps<RootStackParamList,
  'TelaCadFuncionario'>;

type CadProdutoProps = NativeStackScreenProps<RootStackParamList,
  'TelaCadProduto'>;

type CadCategoriaProps = NativeStackScreenProps<RootStackParamList,
  'TelaCadCategoria'>;

type ConsClienteProps = NativeStackScreenProps<RootStackParamList,
  'TelaConsCliente'>;

type ConsFuncionarioProps = NativeStackScreenProps<RootStackParamList,
  'TelaConsFuncionario'>;

type ConsProdutoProps = NativeStackScreenProps<RootStackParamList,
  'TelaConsProduto'>;

type ConsCategoriaProps = NativeStackScreenProps<RootStackParamList,
  'TelaConsCategoria'>;

//exporta o navegador da pilha para ficar visível para outros arquivos    
export default HomeNavigator;

//exporta os tipos de dados para ficar visível para outros arquivos
export type {
  PrincipalProps,
  CadClienteProps,
  CadFuncionarioProps,
  CadProdutoProps,
  CadCategoriaProps,
  ConsClienteProps,
  ConsFuncionarioProps,
  ConsProdutoProps,
  ConsCategoriaProps
};