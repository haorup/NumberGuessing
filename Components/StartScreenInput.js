import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';

export default function StartScreenInput() {
    const [name, setName] = useState('');
    const [emailAddr, setEmailAddr] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [notRobot, setNotRobot] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const nameError = 'Please enter a valid name';
    const emailError = 'Please enter a valid email address';
    const phoneError = 'Please enter a valid phone number';

    function checkName() {
        const regex = /\d/;
        // check the length of the name when the input field is focused
        if (isFocus && name.length < 2) {
            return nameError;
        }
        // check if the name contains any number
        if (regex.test(name)) {
            return nameError;
        }
        return null;
    }

    function checkEmail() {
        const regex = /\S+@\S+\.\S+/;
        // check the email address when the input field is focused
        if (isFocus && !regex.test(emailAddr)) {
            return emailError;
        }
        return null;
    }

    function checkPhone() {
        const regex = /^\d{10}$/;
        // check the phone number when the input field is focused
        if (isFocus && !regex.test(phoneNum)) {
            return phoneError;
        }
        if (phoneNum.lastIndexOf('0') === 9) {
            return phoneError;
        }
        if (phoneNum.lastIndexOf('1') === 9) {
            return phoneError;
        }
        return null;
    }

    return (
        <View style={styles.container}>
            {/* name input field */}
            <Text style={styles.text}>Name:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                onFocus={() => setIsFocus(true)}
                textAlign='center'
            />
            <Text>{checkName()}</Text>

            {/* email address input field */}
            <Text style={styles.text}>Email:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmailAddr}
                value={emailAddr}
                onFocus={() => setIsFocus(true)}
                textAlign='center'
            />
            <Text>{checkEmail()}</Text>

            {/* phone number input field */}
            <Text style={styles.text}>Phone Number:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPhoneNum}
                value={phoneNum}
                onFocus={() => setIsFocus(true)}
                textAlign='center'
            />
            <Text>{checkPhone()}</Text>
            
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
