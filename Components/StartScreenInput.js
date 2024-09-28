import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';

export default function StartScreenInput() {
    const [name, setName] = useState('');
    const [emailAddr, setEmailAddr] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [notRobot, setNotRobot] = useState(false);

    return (
        <View style={styles.container}>
            {/* name input field */}
            <Text style={styles.text}>Name:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                textAlign='center'
            />
            {/* email address input field */}
            <Text style={styles.text}>Email:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmailAddr}
                value={emailAddr}
                textAlign='center'
            />
            {/* phone number input field */}
            <Text style={styles.text}>Phone Number:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPhoneNum}
                value={phoneNum}
                textAlign='center'
            />
            {/* checkbox of checking robot*/}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                margin: 5,
                paddingTop: 15,
            }}>
                <Checkbox
                    style={{
                        width: 15,
                        height: 15,
                    }}
                    value={notRobot}
                    onValueChange={setNotRobot}
                    color={notRobot ? '#1e90ff' : undefined}
                />
                <Text style={{
                    color: 'purple',
                    fontSize: 15,
                    paddingLeft: 5,
                    textAlign: 'left',
                }}>I am not a robot</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    text: {
        color: 'purple',
        fontSize: 20,
        padding: 5,
        textAlign: 'left',
    },
    input: {
        width: '90%',
        borderColor: 'purple',
        padding: 5,
        margin: 5,
        borderBottomWidth: 2,
        // justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'purple',
    },
});
