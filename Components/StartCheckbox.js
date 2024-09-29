import React from 'react';
import { View, Text, StyleSheet, style } from 'react-native';
import { Checkbox } from 'expo-checkbox';

export default function StartCheckbox({
  notRobotInfo,
  handleCheckbox,
}) {
  function setNotRobot(value) {
    handleCheckbox(value);
  }

  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={notRobotInfo}
        onValueChange={(value) => setNotRobot(value)}
        color={notRobotInfo ? '#1e90ff' : undefined}
      />
      <Text style={styles.text}>I am not a robot</Text>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  checkbox: {
    width: 15,
    height: 15,
  },
  text: {
    color: 'purple',
    fontSize: 15,
    paddingLeft: 5,
    textAlign: 'left',
  }
});
