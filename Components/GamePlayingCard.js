import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Card from './Card'
import SharedButton from './SharedButton';

export default function GamePlayingCard({
    baseNumber, numberGuessed, setNumberGuessed,
    hintMessage, attempts, timeLeft,
    handleHintPressed, isHintUsed,
    handleSubmitGuess
}) {
    return (
        <Card>
            <Text style={styles.text}>Guess a number between 1 and 100
                that is multiply of {baseNumber}</Text>
            <TextInput style={styles.input}
                textAlign='center'
                value={numberGuessed}
                onChangeText={setNumberGuessed} />
            <View>
                <Text style={styles.hintText}>{hintMessage}</Text>
                <Text style={styles.reminderText}>Attempts left: {attempts} {`\n`}
                    Time left: {timeLeft}s
                </Text>
            </View>
            <View style={styles.buttonSection}>
                <Button title='Use a Hint'
                    disabled={isHintUsed}
                    color={isHintUsed ? 'white' : 'blue'}
                    onPress={() => { handleHintPressed() }} />
                <SharedButton passedTitle='Submit Guess'
                    passedPressFunc={handleSubmitGuess} />
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'purple',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5,
    },
    reminderText: {
        textAlign: 'center',
        color: 'red',
        fontSize: 15,
        padding: 5,
    },
    hintText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 5,
    },

    input: {
        alignSelf: 'center',
        width: 50,
        borderColor: 'black',
        padding: 5,
        margin: 5,
        borderBottomWidth: 2,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'purple',
    },
    buttonSection: {
        padding: 10,
        alignItems: 'center'
    }
})
