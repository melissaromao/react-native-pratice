import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Jobs from './components/Jobs';
import { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState('@melissaromao')
  let img = 'https://media.licdn.com/dms/image/v2/D4D03AQHOunEjANYpVQ/profile-displayphoto-crop_800_800/B4DZyXBa3pHEAI-/0/1772060258916?e=1777507200&v=beta&t=fTPWtmtnLalC65hZLz-iunG8Jh-Hsj1WS-BWWLghKjY'
  const handleMudar=()=>{
    setNome('Obrigada por me seguir!')
  }
  return (
    <View style={styles.container}>
      <Text
        style={{ color: '#000000', fontSize: 20, margin: 15, textAlign: 'center', fontWeight: 'bold' }}>
        Utilizando componentes text e image com imagem externa do linkedin armazenada na variável let
      </Text>

      <Text
        style={{ color: '#a193d4', fontSize: 25, margin: 15, fontWeight: 'bold'}}>
        Follow me on LinkedIn!
      </Text>

      <Image
        source={{ uri: img }}
        style={{ width: 200, height: 200, borderRadius: 100, alignSelf: 'center', marginBottom: 15 }}
      />

      <Text
        style={{ color: '#368ed6', fontSize: 30, margin: 15, textAlign: 'center', fontWeight: 'bold', width: 500 }}>
        {nome}
      </Text>

      <Text
        style={{ color: '#000000', fontSize: 20, margin: 15, textAlign: 'center', fontWeight: 'bold' }}>
        Utilizando componentes text e image passando a imagem e o nome como props para o componente Jobs
      </Text>

      <Jobs
        img={img}
        largura={200}
        altura={200}
        fulano={nome}
      />

      <Button title='Follow' onPress={handleMudar}/>

      <StatusBar style="auto" />

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
});