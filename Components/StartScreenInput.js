import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { useState } from 'react';

export default function StartScreenInput() {
    const [name, setName] = useState('');
    const [emailAddr, setEmailAddr] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [notRobot, setNotRobot] = useState(false);

  return (
    <View style={styles.container}>
        {/* name input field */}
      <Text style={styles.text}>Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        textAlign='center'
      />
      {/* email address input field */}
      <Text style={styles.text}>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmailAddr}
        value={emailAddr}
        textAlign='center'
      />
        {/* phone number input field */}
        <Text style={styles.text}>Phone Number:</Text>
        <TextInput
        style={styles.input}
        onChangeText={setPhoneNum}
        value={phoneNum}
        textAlign='center'
        />
        {/* checkbox of checking robot*/}
      <Text style={styles.text}>I am not a robot</Text>
      {/* <CheckBox
        value={notRobot}
        onValueChange={setNotRobot}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    text: {
        color: 'purple',
        fontSize: 20,
        padding: 5,
        textAlign: 'left',
    },
    input: {
        width: '90%',
        borderColor: 'purple',
        padding: 5,
        margin: 5,
        borderBottomWidth: 2,
        // justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'purple',
    },
    });
