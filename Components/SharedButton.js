import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

export default function SharedButton(
    { passedTitle, passedPressFunc, passedColor }) {
    return (
        <View style={styles.buttonSection}>
            <Button title={passedTitle} 
                color={passedColor || undefined} 
                onPress={passedPressFunc} />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonSection: {
        margin: 5,
        padding: 5,
    },
})
