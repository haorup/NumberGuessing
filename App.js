import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from './Screens/Start';
import { useState } from 'react';

export default function App() {
  const [confirmVisibility, setConfirmVisibility] = useState(false);

  function handleConfirm() {
    setConfirmVisibility(true);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Start />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
