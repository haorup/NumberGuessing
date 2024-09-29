import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from './Screens/Start';
import { useState } from 'react';
import Confirm from './Screens/Confirm';

export default function App() {
  const [confirmVisibility, setConfirmVisibility] = useState(false);
  const [userData, setUserData] = useState(null);

  function handleConfirm() {
    setConfirmVisibility(true);
  }

  function handleUserData(data) {
    setUserData(data);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Start showConfirm={handleConfirm}
      passingUserData={handleUserData}/>
      <Confirm ifConfirmVisible={confirmVisibility}
                userInput={userData} />
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
