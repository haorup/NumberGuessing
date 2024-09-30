import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Card from './Card';
import SharedButton from './SharedButton';
import { Colorhelper } from './Colorhelper';


export default function GameFinalResultCard({
    gameResult, attempts, targetNumber,
    handleNewGame, gameOverMessage }
) {
    return (
        <Card>
            {gameResult === 'win' ?
                (<View style={styles.container}>
                    <Text style={styles.text}>You guessed correct! {'\n'}
                        Attempts used: {4 - attempts} {'\n'}
                    </Text>
                    <Image source={{ uri: `https://picsum.photos/id/${targetNumber}/100/100` }}
                        style={styles.imageStyle}
                        alt='winner' />
                </View>)
                : (<View style={styles.container}>
                    <Text style={styles.text}>The game is over!</Text>
                    <Image source={require('../assets/sadSmile.jpeg')}
                        style={styles.imageStyle}
                        alt='loser' />
                    <Text style={styles.text}>{gameOverMessage}</Text>
                </View>)}
            <SharedButton passedTitle='New Game'
                passedColor={Colorhelper.blue} passedPressFunc={handleNewGame} />
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
    },
    text: {
        textAlign: 'center',
        color: Colorhelper.purple,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        padding: 5,
    },
    buttonSection: {
        margin: 5,
    },
    imageStyle: {
        width: 120,
        height: 120,
        padding: 5,
        margin: 5,
        alignSelf: 'center',
    },
})
