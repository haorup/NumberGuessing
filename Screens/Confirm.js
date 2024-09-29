import React from 'react';
import { Modal, View, Text, StyleSheet, Button } from 'react-native';
import LinearGradientBackground from '../Components/LinearGradientBackground';
import Card from '../Components/Card';

export default function Confirm({
    ifConfirmVisible,
    userInput,
    goBackToStart,
    gameHandler,
}) {

    function enterGame() {
        goBackToStart();
        gameHandler();
    }

    return (
        <Modal visible={ifConfirmVisible}
            animationType='slide'
            transparent={true}>
            <View style={styles.container}>
            <LinearGradientBackground colors={['rgba(0, 255, 255, 255)', 'rgba(0, 0, 0, 0)']}>
                <View style={styles.modalView}>
                    <Card flex={true}>
                        <View style={{flex: 3}}>
                        <Text>Hello {userInput && userInput.name}</Text>
                        <Text>Here is the information you entered:</Text>
                        <Text>{userInput && userInput.email}</Text>
                        <Text>{userInput && userInput.phone}</Text>
                        <Text>If this is not correct, Please
                            go back and edit them.
                        </Text>
                        </View>
                        <View style={styles.buttonSection}>
                        <Button title='Go Back' color='red' onPress={() => {goBackToStart()}} />
                        <Button title='Continue' onPress={() => {enterGame()}} />
                        </View>
                    </Card>
                </View>
                </LinearGradientBackground>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: '80%',
        height: '30%',
    },
    buttonSection: {
        flex: 1,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',


    },
})
