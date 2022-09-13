import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
//para mudar algo com css tem que ser em torno de chaves
//touchableOpacity deixa as areas clicaveis
// ? na interface deixa como não obrigatorio ex: title? = string; 
interface ButtonProps{
  title :string;
  
}

function Button(props:ButtonProps){
  return (
    <TouchableOpacity style={styles.corBotao}  onPress={()=>Alert.alert("receba")}>
      <Text style={styles.texto}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.texto}>opa  kappa nicolas</Text>
      
      <Button   title='click' />
      
      <StatusBar style="auto" backgroundColor='blue' />
    </View>
  );
 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    
    borderRadius:5,
    fontSize: 16,
    textAlign:'center',
    backgroundColor: 'blue',
  },

  corBotao: {
    padding: 15,
    width: 80, 
    height: 80, 
    border: 'none',
    textDecoration: 'none',
    alignItems: 'center',
    
  },
  

});
