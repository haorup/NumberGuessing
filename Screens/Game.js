import React, { useEffect } from 'react';
import LinearGradientBackground from '../Components/LinearGradientBackground';
import { View, Button, Text, StyleSheet, Modal, TextInput } from 'react-native';
import Card from '../Components/Card';
import { useState } from 'react';


export default function Game({ restartGame }) {



    const [gameStatus, setGameStatus] = useState('notYet');
    const [baseNumber, setBaseNumber] = useState(null);
    const [targetNumber, setTargetNumber] = useState(null);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [numberGuessed, setNumberGuessed] = useState(null);
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
        setIsTimerRunning(true);
        console.log('Game started');
        console.log('Target number: ' + targetNumber);
    }

    useEffect(() => {
        generateBaseNumber();
    }, [])

    return (
        <Modal visible={true}
            animationType='slide'
            transparent={false}>
            <LinearGradientBackground colors={["#f0fff0", "#adff2f", "#00ff7f"]}>
                <View style={styles.container}>
                    <View style={styles.screenContainer}>
                        <View style={styles.restartButtonSection}>
                            <Button title='Restart' onPress={() => { handleRestart() }} />
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
                        {gameStatus === 'started' && <Card>
                            <View style={styles.text}>
                                <Text>Guess a number between 1 and 100
                                    that is multiply of {baseNumber}</Text>
                            </View>
                            <TextInput style={styles.input}
                                textAlign='center'
                                value={numberGuessed}
                                onChangeText={setNumberGuessed} />
                            <View style={styles.buttonSection}>
                                <Button title='Use a Hint' onPress={() => { }} />
                                <Button title='Submit guess' onPress={() => { }} />

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
    }
})
