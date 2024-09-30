import React from 'react';
import Card from './Card';
import { View, Text, Button, StyleSheet } from 'react-native';
import SharedButton from './SharedButton';
import { Colorhelper } from './Colorhelper';

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
            <SharedButton passedTitle={'Start Game'}
                passedPressFunc={passedStartGame} />
        </Card>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: Colorhelper.purple,
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5,
    },

});
