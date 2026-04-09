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