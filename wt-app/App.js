import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const doIt = () => {
    console.log("Hello from console")
  }
  return (
<View style={styles.container}>
 <Weather zipCode="90110"/>
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
