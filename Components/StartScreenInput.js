import React from 'react';
import { StyleSheet, TextInput, } from 'react-native';
import { Colorhelper } from './Colorhelper';

export default function StartScreenInput({
    inputInfo,
    inputInfoType,
    passingInfo,
}) {

    function updateState(value) {
        passingInfo(inputInfoType, value);
    }
    return (
            <TextInput
                style={styles.input}
                onChangeText={updateState}
                value={inputInfo}
                textAlign='center'
            />
    )
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        width: '90%',
        borderColor: Colorhelper.purple,
        padding: 5,
        margin: 5,
        borderBottomWidth: 2,
        fontSize: 20,
        fontWeight: 'bold',
        color: Colorhelper.purple,
    }
});
