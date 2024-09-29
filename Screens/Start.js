import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../Components/Header';
import Card from '../Components/Card';
import StartScreenInput from '../Components/StartScreenInput';
import LinearGradientBackground from '../Components/LinearGradientBackground';


export default function Start() {
  return (
    <LinearGradientBackground>
    <View style={styles.container}>
      {/* welcome message header in top view */}
      <View style={styles.topView}>
        <Header />
      </View>

      {/* card view in the middle
      all textinputs and checkbox are put here*/}
      <View style={styles.cardView}>
        <Card >
          <StartScreenInput />
        </Card>
      </View>

      {/* bottom view are set empty */}
      <View style={styles.bottomView}>
      </View>
    </View>
    </LinearGradientBackground>
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
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
