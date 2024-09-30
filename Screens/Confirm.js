import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import LinearGradientBackground from '../Components/LinearGradientBackground';
import Card from '../Components/Card';
import SharedButton from '../Components/SharedButton';
import { Colorhelper } from '../Components/Colorhelper';

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
                <LinearGradientBackground colors={[Colorhelper.cyanOpace, Colorhelper.fullyTransparent]}>
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
                            <View style={styles.buttonStyle}>
                                <SharedButton passedTitle='Go Back' 
                                passedColor={Colorhelper.red} passedPressFunc={goBackToStart} />
                                <SharedButton passedTitle='Continue'
                                passedPressFunc={enterGame} />
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
    buttonStyle: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text: {
        color: Colorhelper.purple,
        fontSize: 15,
        padding: 5,
        textAlign: 'left',
        fontWeight: 'bold',
      },
})
