import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View >
        <Text style={styles.text}>Welcome</Text>
        </View>
    )
    }

const styles = StyleSheet.create({
    text: {
        color: 'purple',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5,
        margin: 5,
        marginTop: 10,
        alignContent: 'center',

    },
});
