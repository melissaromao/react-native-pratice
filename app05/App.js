import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';

const PIZZAS = [
  { label: 'Calabresa - R$ 35,00', value: 35 },
  { label: 'Frango com Catupiry - R$ 40,00', value: 40 },
  { label: 'Quatro Queijos - R$ 45,00', value: 45 },
  { label: 'Portuguesa - R$ 38,00', value: 38 },
  { label: 'Margherita - R$ 42,00', value: 42 },
];

const BEBIDAS = [
  { label: 'Refrigerante - R$ 7,00', preco: 7 },
  { label: 'Suco - R$ 9,00', preco: 9 },
  { label: 'Água - R$ 4,00', preco: 4 },
];

export default function App() {
  const [open, setOpen] = useState(false);
  const [pizzaSelecionada, setPizzaSelecionada] = useState(null);
  const [itens, setItens] = useState(PIZZAS);

  const [bebidas, setBebidas] = useState([false, false, false]);

  const [borda, setBorda] = useState('sem');

  const [total, setTotal] = useState('');

  const toggleBebida = (index) => {
    const novas = [...bebidas];
    novas[index] = !novas[index];
    setBebidas(novas);
  };

  const calcular = () => {
    if (!pizzaSelecionada) {
      Alert.alert('Atenção', 'Selecione o sabor da pizza!');
      return;
    }

    let valorTotal = pizzaSelecionada;

    BEBIDAS.forEach((b, i) => {
      if (bebidas[i]) valorTotal += b.preco;
    });

    if (borda === 'com') valorTotal += 8;

    setTotal(`Total do pedido: R$ ${valorTotal.toFixed(2)}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>🍕 Pizzaria Sabour</Text>

      <Text style={styles.label}>Sabour da Pizza</Text>
      <DropDownPicker
        open={open}
        value={pizzaSelecionada}
        items={itens}
        setOpen={setOpen}
        setValue={setPizzaSelecionada}
        setItems={setItens}
        placeholder="Escolha o sabor"
        containerStyle={{ marginBottom: 20 }}
        zIndex={1000}
      />

      <Text style={styles.label}>Bebidas:</Text>
      {BEBIDAS.map((b, i) => (
        <CheckBox
          title={b.label}
          checked={bebidas[i]}
          onPress={() => toggleBebida(i)}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="#c62828"
        />
        ))}

      <Text style={[styles.label, { marginTop: 16 }]}>Borda recheada?</Text>
      <RadioButton.Group onValueChange={(v) => setBorda(v)} value={borda}>
        <View style={styles.radio}>
          <RadioButton value="com" />
          <Text>Com borda recheada - R$ 8,00</Text>
        </View>
        <View style={styles.radio}>
          <RadioButton value="sem" />
          <Text>Sem borda recheada</Text>
        </View>
      </RadioButton.Group>

      <Button
        title="Calcular Total"
        onPress={calcular}
        containerStyle={styles.botaoContainer}
        buttonStyle={styles.botao}
      />

      {total !== '' && (
        <Text style={styles.resultado}>{total}</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    flexGrow: 1,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#c62828',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  botaoContainer: {
    marginTop: 24,
    borderRadius: 6,
  },
  botao: {
    backgroundColor: '#c62828',
    padding: 12,
  },
  resultado: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2e7d32',
  },
});