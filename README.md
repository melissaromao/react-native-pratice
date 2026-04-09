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

Aplicação simples que utiliza componentes **View**, **Text** e **StyleSheet**
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
<summary>App 02</summary>

Aplicação simples trabalhando com componente *Image* para uso de imagens externas, *componentes*, *props* e *Hooks*.
- *Props:* São propriedades estáticas onde podemos passar ou utilizar informações, não podendo alterá-la ao receber um valor externo.

> *Hooks:* São funções do React que permitem *conectar ao estado e ao ciclo da vida da aplicação*, criados especificamente para *componentes funcionais*. Resolvem problemas como a reutilização de código entre os componentes e  deixa a aplicação mais rápida e com código legível, além de melhorar a verbosidade (ações) do programa.
- *Estados:* Variáveis que armazenam e alteram informações sobre um componente.
- *Ciclo de Vida:* Funções executadas em momentos diferentes com ações diferentes.

> *Componentes do Hooks:* *Use State* - Permite usar componentes e manipular variáveis mesmo dentro de funções; *Use Effect* - Permite substituir todo o ciclo de vida, sem precisar de uma classe para chamar, montar ou desmontar um componente;  *Use Memo* - Usado para memorizar valores calculados entre renderizações consecutivas do componente; *Use Ref* - Usado para criar uma referência mutável que pode ser associada a elementos do DOM ou a outros valores que precisam ser mantidos em renderizações consecutivas de um componente.

### Estrutura de Pastas

### Saída

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
</details>