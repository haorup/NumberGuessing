import React, { useEffect } from 'react';
import LinearGradientBackground from '../Components/LinearGradientBackground';
import {
    View, Button, Text, StyleSheet,
    Modal, TextInput, Alert, Image
} from 'react-native';
import Card from '../Components/Card';
import { useState } from 'react';


export default function Game({ restartGame }) {


    const [gameStatus, setGameStatus] = useState('notYet');
    const [gameResult, setGameResult] = useState(null); // win, lose
    const [baseNumber, setBaseNumber] = useState(null);
    const [targetNumber, setTargetNumber] = useState(null);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [numberGuessed, setNumberGuessed] = useState(null);
    const [hintMessage, setHintMessage] = useState('');
    const [isHintUsed, setIsHintUsed] = useState(false);
    const [showGuessResult, setShowGuessResult] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);
    const [attempts, setAttempts] = useState(4);

    function handleRestart() {
        console.log('Restarted')
        restartGame()
    }

    function generateBaseNumber() {
        setBaseNumber(Math.floor(Math.random() * 9) + 1);
    }

    function generateTargetNumber() {
        let multiplier = Math.floor(Math.random() * 11) + 1;
        setTargetNumber(baseNumber * multiplier);
    }

    function startGame() {
        generateTargetNumber();
        setGameStatus('started');
        setTimeLeft(60);
        setIsTimerRunning(true);
        console.log('Game started');
        console.log('Target number: ' + targetNumber);
    }

    function handleHintPressed() {
        if (isHintUsed) {
            return;
        }
        setIsHintUsed(true);
        let hint = targetNumber >= 50;
        hint ? setHintMessage('The number is between 50 and 100')
            : setHintMessage('The number is between 1 and 50');
    }

    function handleSubmitGuess() {
        // check if the input is valid
        if (isNaN(numberGuessed)) {
            Alert.alert('Invalid input!', 'Please enter a number');
            setAttempts(attempts - 1);
            return;
        }
        if (Number(numberGuessed) < 1 || Number(numberGuessed) > 100) {
            Alert.alert('Invalid input!',
                'Please enter a number between 1 and 100');
            setAttempts(attempts - 1);
            return;
        }
        if (Number(numberGuessed) % baseNumber !== 0) {
            Alert.alert('Invalid input!',
                'Please enter a number that is multiply of ' + baseNumber);
            setAttempts(attempts - 1);
            return;
        }
        // check if the guess is correct
        if (Number(numberGuessed) === targetNumber) { 
            setGameStatus('finished');
            setGameResult('win');
        }
        setAttempts(attempts - 1);
        setShowGuessResult(true);
    }

    function handleTryAgain() {
        if (attempts === 0 // no attempts left
            || !isTimerRunning   // time is up
        ) {
            setGameStatus('finished');
            setGameResult('lose');
        }
        setShowGuessResult(false);
        setNumberGuessed(null);
    }

    console.log('Base number: ' + baseNumber);
    console.log('Target number: ' + targetNumber);
    console.log('number guessed: ' + numberGuessed);



    useEffect(() => {
        if (attempts === 0) {
            setGameStatus('finished');
            setIsTimerRunning(false);
        }
        if (timeLeft === 0) {
            setGameStatus('finished');
        }
    }, [attempts, timeLeft]);

    useEffect(() => {
        generateBaseNumber();
    }, [])

    // countdown timer
    useEffect(() => {
        if (!isTimerRunning || timeLeft <= 0) {
            setIsTimerRunning(false);
            return;
        }
        const intervalData = setInterval(() => {
            setTimeLeft(prevtimeLeft => prevtimeLeft - 1);
        }, 1000);
        return () => clearInterval(intervalData);
    }, [timeLeft, isTimerRunning]);

    return (
        <Modal visible={true}
            animationType='slide'
            transparent={false}>
            <LinearGradientBackground colors={["#f0fff0",
                "#adff2f", "#00ff7f"]}>
                <View style={styles.container}>
                    <View style={styles.screenContainer}>
                        <View style={styles.restartButtonSection}>
                            <Button title='Restart'
                                onPress={() => { handleRestart() }} />
                        </View>

                        {/* starting game card */}
                        {gameStatus === 'notYet' && <Card>
                            <View style={styles.text}>
                                <Text>Guess a number between 1 and 100
                                    that is multiply of {baseNumber} {`\n`}
                                    Time limit: 60 seconds {`\n`}
                                    Maximum attempts: 4 {`\n`}
                                </Text>
                            </View>
                            <View style={styles.buttonSection}>
                                <Button title='Start' onPress={() => { startGame() }} />
                            </View>
                        </Card>}

                        {/* playing game card */}
                        {gameStatus === 'started' && !showGuessResult && <Card>
                            <View style={styles.text}>
                                <Text>Guess a number between 1 and 100
                                    that is multiply of {baseNumber}</Text>
                            </View>
                            <TextInput style={styles.input}
                                textAlign='center'
                                value={numberGuessed}
                                onChangeText={setNumberGuessed} />
                            <View>
                                <Text>{hintMessage}</Text>
                                <Text>Attempts left: {attempts} {`\n`}
                                    Time left: {timeLeft}s
                                </Text>
                            </View>
                            <View style={styles.buttonSection}>
                                <Button title='Use a Hint'
                                    disabled={isHintUsed}
                                    color={isHintUsed ? 'white' : 'blue'}
                                    onPress={() => { handleHintPressed() }} />
                                <Button title='Submit guess'
                                    color='blue' onPress={() => { handleSubmitGuess() }} />
                            </View>
                        </Card>}

                        {/* guess result card */}
                        {gameStatus === 'started' && showGuessResult && <Card>
                            <View style={styles.text}>
                                <Text>You did not guess correct!{'\n'}
                                    {numberGuessed > targetNumber
                                        ? 'You should guess lower'
                                        : 'You should guess higher'}
                                </Text>
                            </View>
                            <View style={styles.buttonSection}>
                                <Button title='Try Again'
                                    color='blue'
                                    onPress={() => { handleTryAgain() }} />
                                <Button title='End the Game'
                                    color='blue'
                                    onPress={() => {
                                        setGameStatus('finished');
                                        setGameResult('lose')
                                    }} />
                            </View>
                        </Card>}

                        {/* game over card */}
                        {gameStatus === 'finished' && <Card>
                            {gameResult === 'win'?
                            (<View style={styles.text}> 
                                <Text>You guessed correct! {'\n'}
                                    Attempts used: {4 - attempts} {'\n'}
                                </Text>
                                <Image source={{uri:`https://picsum.photos/id/${targetNumber}/100/100`}}
                                style={styles.imageStyle}
                                alt='winner' />
                            </View>)
                            : (<View style={styles.text}>
                                <Text>The game is over!</Text>
                                <Image source={require('../assets/sadSmile.jpeg')}
                                style={styles.imageStyle}
                                alt='loser' />
                            </View>)}
                            <View style={styles.buttonSection}>
                                <Button title='NewGame'
                                    onPress={() => { }} />
                            </View>
                        </Card>}
                    </View>
                </View>
            </LinearGradientBackground>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    restartButtonSection: {
        alignSelf: 'flex-end',
        margin: 5,
    },
    text: {
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSection: {
        margin: 5,
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
    imageStyle: {
        width: 50,
        height: 50,
        padding: 5,
        margin: 5,
    },
})
