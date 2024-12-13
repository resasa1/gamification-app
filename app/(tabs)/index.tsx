import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Homer Screen</Text>
      <Link href="/about" style={styles.button}>
      Go to About Screen</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    },
    text : {
      color: '#333',
    },
    button : {
      fontSize: 20,
      textDecorationLine: 'underline',
      color: '#fff',
    }
})