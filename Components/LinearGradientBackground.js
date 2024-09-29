import React from 'react'
import { StyleSheet } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

export default function LinearGradientBackground({ children, colors }) {
  return (
    <LinearGradient
        colors={colors}
        style={styles.background}>
        {children}
        </LinearGradient>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
