import React from 'react'
import LinearGradientBackground from '../Components/LinearGradientBackground'
import { View, Button, Text, StyleSheet, Modal } from 'react-native'
import Card from '../Components/Card'


export default function Game() {
    return (
        <Modal visible={true}
            animationType='slide'
            transparent={false}>
            <LinearGradientBackground colors={["#f0fff0", "#adff2f", "#00ff7f"]}>
                <View style={styles.container}>
                    <View style={styles.screenContainer}>
                        <View style={styles.restartButtonSection}>
                            <Button title='Restart' onPress={() => { console.log() }} />
                        </View>

                        <Card>
                            <View style={styles.text}>
                                <Text>Guess a number between 1 and 100
                                    that is multiply of 9 {`\n`}
                                    Time limit: 60 seconds {`\n`}
                                    Maximum attempts: 4 {`\n`}
                                </Text>
                            </View>
                            <View style={styles.buttonSection}>
                                <Button title='Start' onPress={() => { console.log() }} />
                            </View>
                        </Card>
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
})
