import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import LinearGradientBackground from '../Components/LinearGradientBackground';
import Card from '../Components/Card';

export default function Confirm({
    ifConfirmVisible,
    userInput,
}) {
    return (
        <Modal visible={ifConfirmVisible}
            animationType='slide'
            transparent={true}>
            <View style={styles.container}>
            <LinearGradientBackground style={{rgba(0,0,0,0)}}>
                <View style={styles.modalView}>
                    <Card>
                        <Text>Hello {userInput && userInput.name}</Text>
                        <Text>Here is the information you entered:</Text>
                        <Text>{userInput && userInput.email}</Text>
                        <Text>{userInput && userInput.phone}</Text>
                        <Text>If this is not correct, Please
                            go back and edit them.
                        </Text>
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
    }
})
