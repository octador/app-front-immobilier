import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
// import { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0);

  const onPress = () => setCount(count + 1);

  useEffect(() => {

  })
  return (


    <View style={styles.container}>
      <Button title="Increments" onPress={onPress} />
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
