import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colorhelper } from './Colorhelper';

export default function Card({ children, flex }) {
  return (
    <View style={[styles.card, flex && { flex: 1 }]}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: Colorhelper.gainsboro,
    padding: 10,
    margin: 20,
    borderRadius: 10,
    shadowColor: Colorhelper.black,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.35,
    elevation: 8,
  },
})
