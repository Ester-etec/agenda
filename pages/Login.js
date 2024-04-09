import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity} from 'react-native';
import { useState,useEffect } from 'react';
import { getAuth,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { initializeApp } from '@firebase/app';
import Firebase from '../firebase';

export default function Login({navigation}) {

  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');
  const [user,setUser] = useState('');
  
  
  const app = initializeApp(Firebase);
  const auth = getAuth(app);
  
  
  function login(){
    signInWithEmailAndPassword(auth,email,senha).catch(
      function(error){
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorCode + '' + errorMessage);
      }
    )
  }
  
  useEffect(()=>{
       onAuthStateChanged(auth,function(user){
           setUser(user);
           if(Initializing) setInitializing(false);
       });
  },[])
  
  useEffect(() => {
    if (user) {
  
        navigation.navigate('Home');
    }
  }, [user, navigation]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem Vindo ao seu Diario</Text>
      <Text style={styles.txt}>Login</Text>
      
      <TextInput
      style={styles.input}
      placeholder='digite seu email'
      onChangeText={(email)=>setEmail(email)}
      value={email}
      />
 
      <Text style={styles.txt}>Senha</Text>
      <TextInput
      style={styles.input}
      placeholder='digite sua senha'
      onChangeText={(senha)=>setSenha(senha)}
      value={senha}
      />

      <TouchableOpacity style={styles.botao}
      onPress={()=>{
        login();
      }}>
        <Text style={styles.botaotexto}>Logar</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#529aff',
    },
    input:{
      width: '100%',
      height: 40,
      borderColor: '#f9d043',
      borderWidth: 3,
      marginBottom: 12,
      paddingHorizontal: 8,
      backgroundColor: '#85acff',
      color: 'white',
      borderRadius: 20
    },
    titulo:{
      color: 'white',
      alignItems: 'center',
      margin: 40,
      fontSize: 30,
      fontWeight: 'bold'
    },
    botao:{
      width: 80,
      height: 50,
      margin: 12,
      paddingHorizontal: 8,
      backgroundColor: '#c3d6ee',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    botaotexto:{
        color:'#fff',
        fontSize:20
    }
  });