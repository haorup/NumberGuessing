import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
        </View>
    )
    }

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'purple',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5,
        margin: 5,
        marginTop: 60,
    },
});
