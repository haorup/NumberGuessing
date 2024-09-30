import React from 'react';
import Card from './Card';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function GameStartingCard({
    passedBaseNumber, passedStartGame }) {
    return (
        <Card>
            <Text style={styles.text}>
                Guess a number between 1 and 100
                that is multiply of {passedBaseNumber} {`\n`} {`\n`}
                Time limit: 60 seconds {`\n`}
                Maximum attempts: 4 {`\n`}
            </Text>
            <View style={styles.buttonSection}>
                <Button title='Start' onPress={() => { passedStartGame() }} />
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'purple',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 5,
    },

    buttonSection: {
        padding: 10,
        alignItems: 'center'
    }
});
