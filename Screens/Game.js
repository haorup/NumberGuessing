import React, { useEffect } from 'react';
import LinearGradientBackground from '../Components/LinearGradientBackground';
import {
    View, StyleSheet,
    Modal, Alert
} from 'react-native';
import { useState } from 'react';
import GameStartingCard from '../Components/GameStartingCard';
import GamePlayingCard from '../Components/GamePlayingCard';
import GameGuessResultCard from '../Components/GameGuessResultCard';
import GameFinalResultCard from '../Components/GameFinalResultCard';
import SharedButton from '../Components/SharedButton';
import { Colorhelper } from '../Components/Colorhelper';


export default function Game({ restartGame }) {
    const [gameStatus, setGameStatus] = useState('notYet'); // notYet, started, finished
    const [gameResult, setGameResult] = useState(null); // win, lose
    const [baseNumber, setBaseNumber] = useState(null);
    const [targetNumber, setTargetNumber] = useState(null);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [numberGuessed, setNumberGuessed] = useState(null);
    const [hintMessage, setHintMessage] = useState('');
    const [isHintUsed, setIsHintUsed] = useState(false);
    const [showGuessResult, setShowGuessResult] = useState(false);
    const [gameOverMessage, setGameOverMessage] = useState('');
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
        console.log('Base number: ' + baseNumber);
        console.log('Target number: ' + targetNumber);
        console.log('number guessed: ' + numberGuessed);
        // stop the timer when the attempts are used up
        if (attempts === 0) {
            setIsTimerRunning(false);
            setShowGuessResult(true);
        }
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
            setIsTimerRunning(false);
            setGameStatus('finished');
            setGameResult('win');
        }
        setAttempts(attempts - 1);
        setShowGuessResult(true);
    }

    function handleTryAgain() {
        if (attempts === 0) {
            setIsTimerRunning(false);
            setGameStatus('finished');
            setGameOverMessage('You are out of attempts!');
            setGameResult('lose');
            return;
        }
        setShowGuessResult(false);
        setNumberGuessed(null);
    }

    function handleEndGame() {
        setGameStatus('finished');
        setGameResult('lose');
        setGameOverMessage('You ended the game!');
    }

    function handleNewGame() {
        setGameStatus('notYet');
        setGameResult(null);
        setTargetNumber(null);
        setIsTimerRunning(false);
        setNumberGuessed(null);
        setHintMessage('');
        setIsHintUsed(false);
        setShowGuessResult(false);
        setTimeLeft(60);
        setAttempts(4);
    }

    useEffect(() => {
        generateBaseNumber();
    }, [])

    // countdown timer
    useEffect(() => {
        if (attempts < 0) {
            setGameStatus('finished');
            setGameResult('lose');
            setGameOverMessage('You are out of attempts!');
            return;
        }
        if (!isTimerRunning) {
            return;
        }
        if (timeLeft <= 0) {
            setIsTimerRunning(false);
            setGameOverMessage('Time is up!');
            setGameStatus('finished');
            return;
        }
        const intervalData = setInterval(() => {
            setTimeLeft(prevtimeLeft => prevtimeLeft - 1);
        }, 1000);
        return () => clearInterval(intervalData);
    }, [timeLeft, isTimerRunning, attempts]);

    return (
        <Modal visible={true}
            animationType='slide'
            transparent={false}>
            <LinearGradientBackground colors={[Colorhelper.honeydew,
            Colorhelper.greenYellow, Colorhelper.springGreen]}>
                <View style={styles.container}>
                    <View style={styles.screenContainer}>
                        <View style={{ alignSelf: 'flex-end' }}>
                            <SharedButton passedTitle='Restart'
                                passedPressFunc={handleRestart} />
                        </View>

                        {/* starting game card */}
                        {gameStatus === 'notYet'
                            && <GameStartingCard passedBaseNumber={baseNumber}
                                passedStartGame={startGame} />}

                        {/* playing game card */}
                        {gameStatus === 'started'
                            && !showGuessResult
                            && <GamePlayingCard baseNumber={baseNumber}
                                numberGuessed={numberGuessed}
                                setNumberGuessed={setNumberGuessed}
                                hintMessage={hintMessage}
                                attempts={attempts}
                                timeLeft={timeLeft}
                                handleHintPressed={handleHintPressed}
                                isHintUsed={isHintUsed}
                                handleSubmitGuess={handleSubmitGuess} />}

                        {/* guess result card */}
                        {gameStatus === 'started'
                            && showGuessResult
                            && <GameGuessResultCard numberGuessed={numberGuessed}
                                targetNumber={targetNumber}
                                handleTryAgain={handleTryAgain}
                                handleEndGame={handleEndGame} />}

                        {/* game over card */}
                        {gameStatus === 'finished'
                            && <GameFinalResultCard gameResult={gameResult}
                                attempts={attempts}
                                targetNumber={targetNumber}
                                handleNewGame={handleNewGame}
                                gameOverMessage={gameOverMessage} />}
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
})
