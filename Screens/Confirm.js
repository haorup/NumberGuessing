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
                            <View style={{ flex: 3 }}>
                                <Text style={styles.text}>
                                    Hello {userInput && userInput.name} {'\n'}
                                    Here is the information you entered: {'\n'}
                                    {userInput && userInput.email} {'\n'}
                                    {userInput && userInput.phone} {'\n'}
                                    If this is not correct, Please
                                    go back and edit them.
                                </Text>
                            </View>
                            <View style={styles.buttonSection}>
                                <Button title='Go Back' color='red' onPress={() => { goBackToStart() }} />
                                <Button title='Continue' onPress={() => { enterGame() }} />
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSection: {
        flex: 1,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    text: {
        color: 'purple',
        fontSize: 15,
        padding: 5,
        textAlign: 'left',
        fontWeight: 'bold',
      },
})
