import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Card from './Card';


export default function GameGuessResultCard({
    numberGuessed, targetNumber,
    handleTryAgain, handleEndGame
}) {
    return (
        <Card>
            <Text style={styles.text}>You did not guess correct!{'\n'}
                {numberGuessed > targetNumber
                    ? 'You should guess lower'
                    : 'You should guess higher'}
            </Text>
            <View style={styles.buttonSection}>
                <Button title='Try Again'
                    color='blue'
                    onPress={() => { handleTryAgain() }} />
                <Button title='End the Game'
                    color='blue'
                    onPress={() => {
                        handleEndGame()
                    }} />
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
        margin: 5,
    },
})
