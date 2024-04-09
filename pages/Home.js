import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minha Agenda</Text>

      <View style={styles.caixa}>
        <Text style={styles.nome}>Nome: Wilderllan</Text>
        <Text style={styles.numero}>11 93278-8765</Text>
      </View>

      <View style={styles.caixa}>
        <Text style={styles.nome}>Nome: Angela</Text>
        <Text style={styles.numero}>11 96678-8555</Text>
      </View>

      <View style={styles.caixa}>
        <Text style={styles.nome}>Nome: Mario</Text>
        <Text style={styles.numero}>11 93909-3333</Text>
      </View>

      <View style={styles.caixa}>
        <Text style={styles.nome}>Nome: Carlos</Text>
        <Text style={styles.numero}>11 90087-6738</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#529aff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    padding: 50,
  },
  caixa: {
    backgroundColor: '#85acff',
    borderColor: '#f9d043',
    borderWidth: 3,
    padding: 20,
    borderRadius: 8,
    marginBottom: 30,
    width: 300
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  numero: {
    fontSize: 16,
  },
});