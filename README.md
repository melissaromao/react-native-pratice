# Práticas com React Native
> [!NOTE]
> O React Native é um framework, sendo uma das principais tecnologias utilizadas para desenvolvimento de **aplicações híbridas**, ou seja, combinando elementos do desenvolvimento nativo e web. Assim criando uma solução versátil, capaz de funcionar em diferentes plataformas e dispositivos.

> [!TIP]
> Entre as vantagens das aplicações híbridas incluem a redução de tempo e custos e a flexibilidade.

## Componentes Nativos
> No React Native invocamos **visualizações nativas** diretamente usando **JavaScript e componentes React**, durante a execução, ele **converte os componentes** em visualizações correspondentes ao **Android e iOS**, garantindo **aparência e comportamento nativos**.

 ### Recursos
 - **Componentes Nativos Essenciais:** Biblioteca integrada com recursos básicos para desenvolvimento imediato.
- **Extensibilidade:** Possibilidade de criar componentes nativos personalizados para atender necessidades específicas.
- **Ecossistema Rico:** Vasto [**repositório de componentes**](https://native.directory) desenvolvimentos pela comunicada.

### Principais Componentes
- **View:** Contêiner para organizar outros componentes.
- **Text:** Exibição de texto com estilo configurável.
- **Image:** Renderização de imagens.
- **TextInput**: Campo de entrada de texto.
- **FlatList e SectionList:** Listagens otimizadas.
- **Button:** Botão básico com funcionalidade integrada.
- **StyleSheet:** API do React Native que permite criar e gerenciar estilos de forma organizada e eficiente, desempenha papel semelhante ao **CSS** para aplicações Web, mas com algumas diferenças adaptadas para o ambiente de desenvolvimento móvel.
<img width="1151" height="629" alt="image" src="https://github.com/user-attachments/assets/657eb13e-e0a9-4a84-b235-bf802387d216" />

### Requisitos
- Instalar [**Expo**](https://docs.expo.dev) no celular.
- Instalar [**Node.js**](https://nodejs.org/en/download/).
- NPM (Node Package Manager).
- Instalar [**Visual Studio Code**](https://code.visualstudio.com/download).
> [!NOTE]
> O **Expo** é um **framework para React Native**, ele fornece um conjunto de ferramentas, bibliotecas e serviços que ajudam a **desenvolver, construir, testar e distribuir aplicativos de forma rápida e eficiente**. Ele já vem no pacote de instalação do Node e com ele podemos rodar os aplicativos no próprio celular.


### Informações do Projeto
- **Package.json:** É um arquivo esponsável por guardar algumas informações do projeto, ele possui um objeto chamado **dependencies** que armazena nomes dos itens que foram instalados dentro do projeto.
- **Node Modules:** É a pasta responsável por **armazenar os arquivos necessários para que o projeto funcione**, sendo uma pasta muito pesada que **deve ser apagada** quando necessário armazenar o projeto em outro local como no repositório do GitHub.
> [!TIP]
> Uma vez apagada ao abrir o projeto em outro local, a pasta Node Modules precisa ser recuperada para o funcionamento do projeto. Para  isso utilizamos o comando `npm install`, ele serve para verificar as dependências armazenadas no arquivo **package.json** e faz a instalação dos pacotes necessários na nova pasta recuperada. Caso apresente erro, devemos usar o comando `npm install npm -g`.

### Criando Projeto
- [x] Crie uma pasta com um nome opcional
- [x] Abra ela no **Visual Studio Code**
- [x] No terminal digite o comando `npx create-expo-app nomedoapp --template`
- [x] Aqui você seleciona o tipo do template, por exemplo **Blank**.
- [x] Acesse a pasta do aplicativo criado com `cd nomedoapp`
- [x] Execute o comando `npm run web` no terminal e instale as dependênciais solicitadas caso necessário
- [x] O aplicativo dará uma saída no navegador com a mensagem presente no **App.js**
- [x] **O aplicativo está rodando e pronto para ser desenvolvido**

# Projetos
<details>

<summary>App 01</summary>

[App01](https://github.com/melissaromao/react-native-pratice/tree/main/app01): Aplicação simples que utiliza componentes **View**, **Text** e **StyleSheet**.
### Estrutura de Pastas
<img width="234" height="362" alt="image" src="https://github.com/user-attachments/assets/c5fd305e-3bf1-4a93-9741-6ed8c2c8f4e1" />

## App.js
```javascript
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.edicao}>Edição Nº 001 · São Paulo, 2025</Text>
        <View style={styles.divisorGrosso} />
        <Text style={styles.titulo}>Melissa Romão</Text>
        <View style={styles.divisorFino} />
        <Text style={styles.subtitulo}>Programação · Ensino · Infraestrutura Computacional</Text>
        <View style={styles.divisorGrosso} />
      </View>

      <View style={styles.corpo}>
        <Text style={styles.chamada}>QUEM É MELISSA?</Text>
        <Text style={styles.paragrafo}>
          Sou tutora de programação e ensino Python e Scratch para crianças e adolescentes, atuo em uma iniciação científica da Fatec Cotia como aluna pesquisadora com foco em banco de dados não-relacional/vetorial e infraestrutura computacional!
        </Text>
      </View>

      <View style={styles.boxDestaque}>
        <Text style={styles.labelDestaque}>| filosofy.py</Text>
        <Text style={styles.textoDestaque}>
          print("Hello, I'm Melissa Romão!"){"\n"}
          while True:{"\n"}
          {"    "}if not iknow:{"\n"}
          {"        "}try_and_learn(){"\n"}
          {"    "}else:{"\n"}
          {"        "}improve()
        </Text>
      </View>

      <View style={styles.footerWrapper}>
        <View style={styles.divisorFino} />
        <Text style={styles.rodape}>Feito com 💗 para aprender React Native</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E8',       
    paddingHorizontal: 24,
    paddingVertical: 36,
    justifyContent: 'space-around',
  },

  header: {
    alignItems: 'center',
    marginBottom: 8,
  },

  edicao: {
    fontFamily: 'serif',
    fontSize: 11,
    color: '#5a4a3a',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 4,
  },

  titulo: {
    fontFamily: 'serif',
    fontSize: 42,
    fontWeight: '900',
    color: '#1a1209',
    letterSpacing: 1,
    textAlign: 'center',
    marginVertical: 6,
  },

  subtitulo: {
    fontFamily: 'serif',
    fontSize: 13,
    color: '#3d2f1e',
    letterSpacing: 3,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginVertical: 6,
  },

  divisorGrosso: {
    height: 3,
    backgroundColor: '#1a1209',
    alignSelf: 'stretch',
    marginVertical: 3,
  },

  divisorFino: {
    height: 1,
    backgroundColor: '#5a4a3a',
    alignSelf: 'stretch',
    marginVertical: 3,
  },

  corpo: {
    marginVertical: 8,
  },

  chamada: {
    fontFamily: 'serif',
    fontSize: 11,
    fontWeight: '700',
    color: '#1a1209',
    letterSpacing: 3,
    textTransform: 'uppercase',
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1209',
    paddingBottom: 3,
  },

  paragrafo: {
    fontFamily: 'serif',
    fontSize: 15,
    color: '#2b1f0f',
    lineHeight: 26,
    textAlign: 'justify',
  },

  boxDestaque: {
    borderWidth: 2,
    borderColor: '#1a1209',
    padding: 14,
    backgroundColor: '#EDE8DC',
    marginVertical: 8,
  },

  labelDestaque: {
    fontFamily: 'serif',
    fontSize: 10,
    fontWeight: '700',
    color: '#1a1209',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 8,
  },

  textoDestaque: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#1a1209',
    lineHeight: 22,
  },

  footerWrapper: {
    alignItems: 'center',
    gap: 6,
  },
  
  rodape: {
    fontFamily: 'serif',
    fontSize: 11,
    color: '#6b5744',
    fontStyle: 'italic',
    textAlign: 'center',
    letterSpacing: 1,
  },
});
```
### Saída
<img width="835" height="997" alt="image" src="https://github.com/user-attachments/assets/0cd022fe-f960-4452-a4b5-b5b4d7068f71" />

</details>

<details>
<summary>App 02</summary>

[App02](https://github.com/melissaromao/react-native-pratice/tree/main/app02): Aplicação simples trabalhando com componente **Image** para uso de imagens externas, **componentes**, **props** e **Hooks**.
- **Props:** São propriedades estáticas onde podemos passar ou utilizar informações, não podendo alterá-la ao receber um valor externo.

> **Hooks:** São funções do React que permitem **conectar ao estado e ao ciclo da vida da aplicação**, criados especificamente para **componentes funcionais**. Resolvem problemas como a reutilização de código entre os componentes e  deixa a aplicação mais rápida e com código legível, além de melhorar a verbosidade (ações) do programa.
- **Estados:** Variáveis que armazenam e alteram informações sobre um componente.
- **Ciclo de Vida:** Funções executadas em momentos diferentes com ações diferentes.

> **Componentes do Hooks:** **Use State** - Permite usar componentes e manipular variáveis mesmo dentro de funções; **Use Effect** - Permite substituir todo o ciclo de vida, sem precisar de uma classe para chamar, montar ou desmontar um componente;  **Use Memo** - Usado para memorizar valores calculados entre renderizações consecutivas do componente; **Use Ref** - Usado para criar uma referência mutável que pode ser associada a elementos do DOM ou a outros valores que precisam ser mantidos em renderizações consecutivas de um componente.

### Estrutura de Pastas
<img width="221" height="394" alt="image" src="https://github.com/user-attachments/assets/da929630-c352-4e87-99e6-83aaf062f1f9" />

### App.js
```javascript
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
```

### Component  Jobs.js
```javascript
import React from "react";
import { View, Text, Image } from "react-native";
export default function Jobs(props) {
    return (
        <View>
            <Image
                source={{ uri: props.img }}
                style={{ width: props.largura, height: props.altura, borderRadius: 100, alignSelf: 'center' }}
            />
            <Text style={{ color: '#36c1d6', fontSize: 30, margin: 15, textAlign: 'center', fontWeight: 'bold',  width: 500}}>
                {props.fulano}
            </Text>
        </View>
    );
}
```

### Saída
<img width="808" height="985" alt="image" src="https://github.com/user-attachments/assets/824644b6-d30e-403e-9ebd-f55eaaea9fe0" />
<img width="804" height="977" alt="image" src="https://github.com/user-attachments/assets/46bb117b-a09e-4361-b45f-67455902d832" />
</details>

<details>

<summary>App 03</summary>

[App03](https://github.com/melissaromao/react-native-pratice/tree/main/app03): Aplicação simples que calcula a área de um retângulo, utilizando componentes **TextInput**, **Image**, **Button**, **TouchableOpacity**, **Pressable** e **Hooks**.

- **Touchable:** O touchable é um componente que **reduz a opacidade quando pressionado**, dando um efeito visual de feedback.
- **Pressable:** O pressable é um componente avançado para lidar com  interações, **altamente configurável** e permite **detectar diferentes estados de toque**, como quando o botão é pressionado, liberado ou sendo mantido pressionado.

### Estrutura de Pastas
<img width="219" height="332" alt="image" src="https://github.com/user-attachments/assets/bafb7652-cbc6-4bf5-b679-e9d4f13cc66a" />

## App.js
```javascript
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
```

### Saída
<img width="805" height="998" alt="image" src="https://github.com/user-attachments/assets/b0f158d8-123e-40b0-b30a-38fd5254ddc5" />
<img width="803" height="999" alt="image" src="https://github.com/user-attachments/assets/65e88f9c-1763-4597-89e6-c2d272ece7d4" />

</details>

<details>

<summary>App 04</summary>

[App04](https://github.com/melissaromao/react-native-pratice/tree/main/app04): Aplicação 3 em 1 que utiliza componentes **FlatList**, **SectionList** para renderizar listas no React Native.

- **FlatList:** Usado para renderizar lista simples e linear de itens, semelhante a tag **ul** ou **ol** do HTML.
- **SectionList:** Extensão do FlatList usado para renderizar listas com seções agrupadas, similar a combinação de **ul** e **h2** para criar listas categorizadas.

> **Modularidade, Flexibilidade e Performance:** Cada **View** utilizada tem uma responsabilidade clara, o layout se adapta bem a diferentes tamanhos de tela e o uso de **flatlist** garante que apenas os itens visíveis sejam renderizados.

### Estrutura de Pastas
<img width="243" height="336" alt="image" src="https://github.com/user-attachments/assets/475f0f28-5f0e-498f-84cf-c3568dae289c" />

## App.js
```javascript
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
```
### Saída
<img width="808" height="1001" alt="image" src="https://github.com/user-attachments/assets/b8606847-66c7-443d-ae55-9732b58fa8a9" />
<img width="809" height="994" alt="image" src="https://github.com/user-attachments/assets/5e0cf275-53e0-49c7-b436-3c3399dc2594" />
<img width="804" height="992" alt="image" src="https://github.com/user-attachments/assets/7a1941e1-cebc-4cf5-9860-668b2221fd05" />
<img width="798" height="1003" alt="image" src="https://github.com/user-attachments/assets/f7d39d3f-0e20-429a-9530-23db6bbd36f8" />
</details>

<details>
<summary>App 05</summary>

[App05](https://github.com/melissaromao/react-native-pratice/tree/main/app05): Aplicação simples de pizzaria trabalhando com **DropDownPicker**, **CheckBox**, **RadioButton e RadioGroup**, **React Native Elements** e **React Native Papers**.

- **React Native Elements:** É uma biblioteca de componentes UI (User Interface) pronta para uso, facilita o desenvolvimento de aplicativos com estilos consistentes e configuráveis, fornecendo componentes de interface reutilizáveis como **botões, caixas de entrada, sliders, ícones** e entre outros, para utilizar basta usar o comando de  instalação `npm install react-native-elements`.
- - **CheckBox:** Uma caixa de seleção é um elemento de interface gráfica com mais de duas opções de estados, podemos marcar e desmarcar elas.
- **Picker:** Componente que fornece uma interface para que os usuários possam selecionar um item de uma lista suspensa (dropdown).
- **DropDownPicker:** Biblioteca de código aberto que fornece o componente dropdown altamente customizável, utilizado como altenativa do **Picker**  que foi descontinuado.
- **RadioButton e RadioGroup:** Um botão que permite que o usuário selecione uma única opção entre várias disponíveis e um grupo de **radiobuttons** que gerencia a seleção de uma única opção.
- **React Native Paper:** Biblioteca de componentes que segue as diretrizer do **Material Design**, permite criar interfaces modernas e responsivas com facilidade, para utlizar basta instalar com o comando `npm install react-native-paper`.

### Estrutura de Pastas
<img width="228" height="331" alt="image" src="https://github.com/user-attachments/assets/adee4416-a42b-47bd-a931-c00beea3fb67" />

### App.js
```javascript
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
```
### Saída
<img width="802" height="996" alt="image" src="https://github.com/user-attachments/assets/ff9ca5c7-2c4e-4aab-b7e2-7a9b2ddcb3fb" />
<img width="801" height="1000" alt="image" src="https://github.com/user-attachments/assets/c6837779-f010-4381-9c3a-9843e11f1f62" />
</details>

<details>

 <summary>App08 • Extra</summary>
Prática extra de **programação de dispositivos móveis**, utilizando **Vue** para criação de aplicação web. O aplicativo se consiste em um simples sistema de cálculo da **velocidade média**.

 ### Vue
 O **Vue** é um **framework** progressivo de **JavaScript** utilizado para **construção de interfaces de usuário (UI)** e aplicações web modernas, especialmente do tipo **SPA (Single Page Application)**. Seu principal objetivo é facilitar o desenvolvimento de **interfaces reativas, organizadas e de fácil manutenção**.

### Estrutura Básica
- **Template:** Parte visual (HTML)
- **Script:** Lógica da aplicação (JavaScript)
- **Style:** Estilização (CSS)

> **Reatividade:** Uma das maiores vantagens do Vue é o sistema reativo, quando um dado muda a tela atualiza automaticamente.

### Estrutura de Componentes
No vue, a aplicação é dividida em componentes reutilizáveis, isso facilita a organização do código, manutenção do sistema e reutilização de telas. Por exemplo:
- **Header.vue**
- **Calculadora.vue**
- **Footer.vue**
- **Formulario.vue*      

### Diretivas
O vue utiliza diretivas/comandos especiais dentro do HTML.
<img width="484" height="162" alt="image" src="https://github.com/user-attachments/assets/b01c7e97-3309-456f-8f4c-5f95db788b62" />

### Comparativo
<img width="644" height="112" alt="image" src="https://github.com/user-attachments/assets/687744fd-afb5-45df-8ff6-41330907392c" />

> Para criar um projeto com Vue, usamos o comando `npm create vite@latest nomedoprojeto`

### Estrutura de Pastas
<img width="199" height="351" alt="image" src="https://github.com/user-attachments/assets/e8054d61-ab4e-4de3-8023-5c0bf4c02afa" />

### App.vue
```javascript
<template>
  <div class="container">
    <h1>Velocidade Média</h1>

    <div class="formulario">
      <label>Digite o valor da distância:</label>
      <input type="number" v-model="distancia" />

      <label>Digite o valor do tempo</label>
      <input type="number" v-model="tempo" />

      <button @click="calcularVelocidadeMedia">Calcular Soma</button>

      <div class="resultado">
        <h2>Resultado: {{ velocidade_media }}</h2>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const distancia = ref < number > (0);
const tempo = ref < number > (0);
const velocidade_media = ref<number>(0);

function calcularVelocidadeMedia(): void {
  velocidade_media.value = distancia.value / tempo.value;
}
</script>

<style>
.container {
  text-align: center;
  margin-top: 50px;
  font-family: Arial, sans-serif;
}

.formulario {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  gap: 10px;
}

input {
  padding: 8px;
  font-size: 16px;
}

button {
  padding: 10px;
  background-color: #42b883;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 10px;
}

button:hover {
  background-color: #2f8f6f;
}

.resultado {
  margin-top: 20px;
  font-weight: bold;
}
</style>
```

### Saída
<img width="1599" height="848" alt="image" src="https://github.com/user-attachments/assets/b6939bb6-28ef-4944-80ec-ce159a50921f" />

</details>
