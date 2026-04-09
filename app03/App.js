import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native';

export default function App() {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState('');

  const handleCalcular = () => {
    const area = parseFloat(base) * parseFloat(altura);
    const areaFormatada = area.toLocaleString('pt-BR');
    setArea(`A área do retângulo é: ${areaFormatada}`);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://br.neurochispas.com/wp-content/uploads/2021/07/formula-para-a-area-de-um-retangulo.png' }}
        style={{ width: 300, height: 200, marginBottom: 20 }}
      />
      <Text style={styles.title}>Calculadora</Text>
      <Text style={styles.label}>Digite o valor da base</Text>
      <TextInput
        style={styles.input}
        placeholder="ex: 200"
        keyboardType="numeric"
        value={base}
        onChangeText={(text) => setBase(text)}
      />
      <Text style={styles.label}>Digite o valor da altura</Text>
      <TextInput
        style={styles.input}
        placeholder="ex: 300"
        keyboardType="numeric"
        value={altura}
        onChangeText={(text) => setAltura(text)}
      />
      <View style={styles.buttonContainer}>
        <Pressable style={({ pressed }) => [
          styles.button, { backgroundColor: pressed ? '#28832b' : '#4CAF50' }
        ]} onPress={handleCalcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </Pressable>
      </View>
      <Text style={styles.result}>{area}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24, fontWeight: 'bold', color: '#333',
    marginBottom: 20,
  },
  label: {
    fontSize: 18, color: '#555', alignSelf: 'flex-start',
    marginBottom: 5, marginLeft: 70
  },
  input: {
    width: '80%', borderWidth: 1, borderColor: '#ccc', padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row', justifyContent: 'space-between', marginVertical:
      20,
    width: '80%', alignItems: 'center', justifyContent: 'center',
  },
  button: {
    padding: 10, borderRadius: 5,
    marginHorizontal: 5, alignSelf: 'center'
  },
  buttonText: {
    color: '#fff', fontWeight: 'bold', textAlign: 'center',
  },
  result: {
    fontSize: 20, fontWeight: 'bold',
    color: '#333',
  },
});