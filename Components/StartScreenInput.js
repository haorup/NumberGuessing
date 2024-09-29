import React from 'react';
import { View, StyleSheet, Text, TextInput, } from 'react-native';
import { useState } from 'react';

export default function StartScreenInput({
    inputInfo,
    inputInfoType,
    passingInfo,
}) {
    const [isFocus, setIsFocus] = useState(false);

    function updateState(value) {
        passingInfo(inputInfoType, value);
    }
    return (
            <TextInput
                style={styles.input}
                onChangeText={updateState}
                value={inputInfo}
                onFocus={() => setIsFocus(true)}
                textAlign='center'
            />
    )
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        borderColor: 'purple',
        padding: 5,
        margin: 5,
        borderBottomWidth: 2,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'purple',
    }
});
