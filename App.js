import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from './Screens/Start';
import { useState } from 'react';
import Confirm from './Screens/Confirm';

export default function App() {
  const [confirmVisibility, setConfirmVisibility] = useState(false);
  const [userData, setUserData] = useState(null);

  // callback function to toggle the Confirm screen
  function handleConfirm() {
    setConfirmVisibility((prevState) => !prevState);
  }
  // callback function to pass the user data to the Confirm screen
  function handleUserData(data) {
    setUserData(data);
  }
  // callback function to toggle the Confirm screen

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Start showConfirm={handleConfirm}
      passingUserData={handleUserData}/>
      <Confirm ifConfirmVisible={confirmVisibility}
                userInput={userData}
                goBackToStart={handleConfirm} />
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
