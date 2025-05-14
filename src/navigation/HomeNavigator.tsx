import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaNotas from "../layouts/TelaNotas";
import TelaLista from "../layouts/TelaLista";
import TelaExercicio5 from "../layouts/TelaCampoDeTexto";
import TelaCampoDeTexto from "../layouts/TelaCampoDeTexto";

//Define quais as telas e os parâmetros de cada tela
type RootStackParamList = {
  TelaPrincipal: undefined; 
  TelaNotas:{nota1 : number, nota2: number, nome : string};
  TelaCampoDeTexto: {onClick:(text: string) => void};
  TelaLista:{listapessoas : string[]};

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

      <Stack.Screen name="TelaNotas" component={TelaNotas} />
      <Stack.Screen name="TelaCampoDeTexto" component={TelaCampoDeTexto} />
      <Stack.Screen name="TelaLista" component={TelaLista} />

    </Stack.Navigator>
  );
}

//cria as propriedades da TelaPrincipal, que nesse caso é undefined
//essas propriedades são usadas lá em layouts/TelaPincipal.tsx
type PrincipalProps = NativeStackScreenProps<RootStackParamList,
  'TelaPrincipal'>;

  

   type Notasprops = NativeStackScreenProps<RootStackParamList,
  'TelaNotas'>;

   type Exe5props = NativeStackScreenProps<RootStackParamList,
  'TelaCampoDeTexto'>;

  type Listaprops = NativeStackScreenProps<RootStackParamList,
  'TelaLista'>;


//exporta o navegador da pilha para ficar visível para outros arquivos    
export default HomeNavigator;

//exporta os tipos de dados para ficar visível para outros arquivos
export type {
  PrincipalProps,
  Notasprops,
  Exe5props,
  Listaprops
};