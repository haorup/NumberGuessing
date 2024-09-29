import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Card({ children }) {
  return (
    <View style={styles.card}>
        {children}
    </View>
    
  )
}

const styles = StyleSheet.create({
  card: {
    width: '80%',
    height: '90%',
    backgroundColor: '#dcdcdc', // gainsboro
    padding: 10,
    margin: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.35,
    elevation: 8,
  },
})
