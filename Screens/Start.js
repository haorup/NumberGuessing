import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../Components/Header';


export default function Start() {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
      <Header />
      </View>
      <View style={styles.cardView}>
        <Text>Card View</Text>
        </View>
      <View style={styles.bottomView}>
        <Text>Bottom View</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  topView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardView: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  bottomView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

