import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Card from './Card';
import SharedButton from './SharedButton';
import { Colorhelper } from './Colorhelper';


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
            <SharedButton passedTitle='Try Again'
                passedColor={Colorhelper.blue} passedPressFunc={handleTryAgain} />
            <SharedButton passedTitle='End Game'
                passedColor={Colorhelper.blue} passedPressFunc={handleEndGame} />
           
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
})
