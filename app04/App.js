import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, FlatList, SectionList, Alert, StyleSheet } from 'react-native';

function CalcularVelocidade() {
  
  const [distancia, setDistancia] = useState('');
  const [tempo, setTempo] = useState('');
  const [lista, setLista] = useState([]);

  const handleCalcular = () => {
    const d = parseFloat(distancia);
    const t = parseFloat(tempo);

    if (isNaN(d) || isNaN(t) || t === 0) {
      Alert.alert('Erro', 'Digite valores válidos.');
      return;
    }

    const v = d / t;
    const novoItem = {
      id: Date.now().toString(),
      distancia: d,
      tempo: t,
      velocidade: v.toFixed(2),
    };

    setLista((prev) => [...prev, novoItem]);
    setDistancia('');
    setTempo('');
  };

  const limparLista = () => {
    setLista([]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Distância: {item.distancia} km</Text>
      <Text style={styles.itemText}>Tempo: {item.tempo} h</Text>
      <Text style={styles.itemDestaque}>Velocidade: {item.velocidade} km/h</Text>
    </View>
  );

  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Calculadora de Velocidade Média</Text>
        <Text style={styles.headerSub}>v = d / t</Text>
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Distância (km)"
          keyboardType="numeric"
          value={distancia}
          onChangeText={setDistancia}
        />
        <TextInput
          style={styles.input}
          placeholder="Tempo (h)"
          keyboardType="numeric"
          value={tempo}
          onChangeText={setTempo}
        />
        <View style={styles.rowButtons}>
          <Pressable style={styles.btnPrimary} onPress={handleCalcular}>
            <Text style={styles.btnText}>Calcular</Text>
          </Pressable>
          <Pressable style={styles.btnDanger} onPress={limparLista}>
            <Text style={styles.btnText}>Limpar lista</Text>
          </Pressable>
        </View>
      </View>

      {lista.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum cálculo realizado ainda.</Text>
      ) : (
        <FlatList
          data={lista}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

function ForcaScreen() {
  const [massa, setMassa] = useState('');
  const [aceleracao, setAceleracao] = useState('');
  const [secoes, setSecoes] = useState([
    { title: 'Objetos Leves (< 10 kg)', data: [] },
    { title: 'Objetos Médios (10 a 50 kg)', data: [] },
    { title: 'Objetos Pesados (> 50 kg)', data: [] },
  ]);

  const calcular = () => {
    const m = parseFloat(massa);
    const a = parseFloat(aceleracao);

    if (isNaN(m) || isNaN(a)) {
      Alert.alert('Erro', 'Digite valores numéricos válidos.');
      return;
    }

    const f = (m * a).toFixed(2);
    const novoItem = {
      id: Date.now().toString(),
      massa: m,
      aceleracao: a,
      forca: f,
    };

    setSecoes((prev) => {
      const novas = prev.map((s) => ({ ...s, data: [...s.data] }));
      if (m < 10) novas[0].data.push(novoItem);
      else if (m <= 50) novas[1].data.push(novoItem);
      else novas[2].data.push(novoItem);
      return novas;
    });

    setMassa('');
    setAceleracao('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Massa: {item.massa} kg</Text>
      <Text style={styles.itemText}>Aceleração: {item.aceleracao} m/s²</Text>
      <Text style={styles.itemDestaque}>Força: {item.forca} N</Text>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Calculadora de Força</Text>
        <Text style={styles.headerSub}>F = m × a</Text>
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Massa (kg)"
          keyboardType="numeric"
          value={massa}
          onChangeText={setMassa}
        />
        <TextInput
          style={styles.input}
          placeholder="Aceleração (m/s²)"
          keyboardType="numeric"
          value={aceleracao}
          onChangeText={setAceleracao}
        />
        <Pressable style={[styles.btnPrimary]} onPress={calcular}>
          <Text style={styles.btnText}>Calcular</Text>
        </Pressable>
      </View>

      <SectionList
        sections={secoes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum dado inserido.</Text>}
      />
    </View>
  );
}

const POSTS_INICIAIS = [
  {
    id: '1',
    usuario: 'Maria Silva',
    iniciais: 'MS',
    texto: 'Estudando React Native hoje!',
    curtidas: 12,
    curtido: false,
  },
  {
    id: '2',
    usuario: 'João Mendes',
    iniciais: 'JM',
    texto: 'FlatList e SectionList são muito poderosos para listas grandes.',
    curtidas: 8,
    curtido: false,
  },
  {
    id: '3',
    usuario: 'Ana Souza',
    iniciais: 'AS',
    texto: 'Estudando  muito...',
    curtidas: 25,
    curtido: false,
  },
];

function RedeSocialScreen() {
  const [posts, setPosts] = useState(POSTS_INICIAIS);
  const [novaMensagem, setNovaMensagem] = useState('');

  const curtir = (id) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, curtido: !p.curtido, curtidas: p.curtido ? p.curtidas - 1 : p.curtidas + 1 }
          : p
      )
    );
  };

  const publicar = () => {
    if (!novaMensagem.trim()) {
      Alert.alert('Erro', 'Digite algo antes de publicar.');
      return;
    }
    const novoPost = {
      id: Date.now().toString(),
      usuario: 'Melissa Dias',
      iniciais: 'MD',
      texto: novaMensagem,
      curtidas: 0,
      curtido: false,
    };
    setPosts((prev) => [novoPost, ...prev]);
    setNovaMensagem('');
  };

  const renderPost = ({ item }) => (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{item.iniciais}</Text>
        </View>
        <Text style={styles.postUsuario}>{item.usuario}</Text>
      </View>
      <Text style={styles.postTexto}>{item.texto}</Text>
      <View style={styles.postAcoes}>
        <Pressable
          style={[styles.acoesBtn, item.curtido && styles.acoesBtnAtivo]}
          onPress={() => curtir(item.id)}
        >
          <Text style={[styles.acoesBtnText, item.curtido && styles.acoesBtnTextAtivo]}>
            ♥ {item.curtidas}
          </Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.screenContainer}>
      <View style={[styles.header]}>
        <Text style={styles.headerText}>Rede Social</Text>
        <Text style={styles.headerSub}>Crie uma postagem!</Text>
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          style={[styles.input, { height: 70 }]}
          placeholder="O que você está pensando?"
          multiline
          value={novaMensagem}
          onChangeText={setNovaMensagem}
        />
        <Pressable style={[styles.btnPrimary]} onPress={publicar}>
          <Text style={styles.btnText}>Publicar</Text>
        </Pressable>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
      />
    </View>
  );
}

export default function App() {
  const [abaAtiva, setAbaAtiva] = useState(0);

  const abas = [
    { label: 'Velocidade', cor: '#ed8a1a' },
    { label: 'Força', cor: '#ce0000' },
    { label: 'Rede Social', cor: '#6e4fa4' },
  ];

  const renderTela = () => {
    if (abaAtiva === 0) return <CalcularVelocidade />;
    if (abaAtiva === 1) return <ForcaScreen />;
    return <RedeSocialScreen />;
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.tabBar}>
        {abas.map((aba, index) => (
          <Pressable
            key={index}
            style={[
              styles.tab,
              abaAtiva === index && { backgroundColor: aba.cor },
            ]}
            onPress={() => setAbaAtiva(index)}
          >
            <Text
              style={[
                styles.tabText,
                abaAtiva === index && styles.tabTextAtivo,
              ]}
            >
              {aba.label}
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={{ flex: 1 }}>{renderTela()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 0,
  },
  tabText: {
    fontSize: 13,
    color: '#666',
    fontWeight: 'bold',
  },
  tabTextAtivo: {
    color: '#fff',
  },
  screenContainer: {
    flex: 1,
  },
  header: {
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerSub: {
    fontSize: 13,
    marginTop: 2,
  },
  inputGroup: {
    padding: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    gap: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fafafa',
    fontSize: 14,
  },
  rowButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  btnPrimary: {
    flex: 1,
    backgroundColor: '#4252a9',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  btnDanger: {
    flex: 1,
    backgroundColor: '#E53935',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 14,
    marginTop: 30,
  },
  itemContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginTop: 10,
    padding: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 14,
    color: '#555',
  },
  itemDestaque: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 4,
  },
  sectionHeader: {
    backgroundColor: '#c30202',
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 8,
  },
  postCard: {
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#6a1b9a',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  postUsuario: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#333',
  },
  postTexto: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
    marginBottom: 10,
  },
  postAcoes: {
    flexDirection: 'row',
    gap: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 8,
  },
  acoesBtn: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  acoesBtnAtivo: {
    backgroundColor: '#f3e5f5',
    borderColor: '#6a1b9a',
  },
  acoesBtnText: {
    fontSize: 13,
    color: '#555',
  },
  acoesBtnTextAtivo: {
    color: '#6a1b9a',
    fontWeight: 'bold',
  },
});