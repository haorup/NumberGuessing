import React from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import Header from '../Components/Header';
import Card from '../Components/Card';
import StartScreenInput from '../Components/StartScreenInput';
import LinearGradientBackground from '../Components/LinearGradientBackground';
import { useState } from 'react';
import StartCheckbox from '../Components/StartCheckbox';

export default function Start({
  showConfirm,
}) {
  const [userInfo, setUserInfo] = useState({'name': '', 'email': '', 'phone': ''});
  const [notRobot, setNotRobot] = useState(false);
  const nameError = 'Please enter a valid name';
  const emailError = 'Please enter a valid email address';
  const phoneError = 'Please enter a valid phone number';

  function checkName() {
    const regex = /\d/;
    // check the length of the name when the input field is focused
    if (userInfo.name && userInfo.name.length < 2) {
      return nameError;
    }
    // check if the name contains any number
    if (regex.test(userInfo.name)) {
      return nameError;
    }
    return null;
  }

  function checkEmail() {
    const regex = /\S+@\S+\.\S+/;
    // check the email address when the input field is focused
    if (userInfo.email && !regex.test(userInfo.email)) {
      return emailError;
    }
    return null;
  }

  function checkPhone() {
    const regex = /^\d{10}$/;
    // check the phone number when the input field is focused
    if (userInfo.phone && !regex.test(userInfo.phone)) {
      return phoneError;
    }
    if (userInfo.phone.lastIndexOf('0') === 9) {
      return phoneError;
    }
    if (userInfo.phone.lastIndexOf('1') === 9) {
      return phoneError;
    }
    return null;
  }

  function reset() {
    setUserInfo({'name': '', 'email': '', 'phone': ''});
    setNotRobot(false);
  }

  function register() {
    // check if the input values are valid
    if (checkName() !== null
      && checkEmail() !== null
      && checkPhone() !== null) {
      Alert.alert("Invalid Input", "Check the input values")
    } else if (!userInfo.name // check if the input fields are empty
      || !userInfo.email
      || !userInfo.phone) {
      Alert.alert("Invalid Input", "Please fill in all the fields")
    } else {
      showConfirm();
    }
  }

  function handleInputData(inputType, inputValue) {
    setUserInfo((prevInfo) => {
      return { ...prevInfo, [inputType]: inputValue };
    });
  }

  function handleCheckbox(value) {
    setNotRobot(value);
  }

  return (
    <LinearGradientBackground>
      <View style={styles.container}>
        {/* welcome message header in top view */}
        <View style={styles.topView}>
          <Header />
        </View>

        {/* card view */}
        <View style={styles.cardView}>
          <Card >
            {/* name input */}
            <Text style={styles.text}>Name:</Text>
            <StartScreenInput
            inputInfo={userInfo.name}
            inputInfoType='name'
            passingInfo={handleInputData}
            />
            <Text style={styles.reminder}>{checkName()}</Text>

            {/* email input */}
            <Text style={styles.text}>Email address:</Text>
            <StartScreenInput
            inputInfo={userInfo.email}
            inputInfoType='email'
            passingInfo={handleInputData}
            />
            <Text style={styles.reminder}>{checkEmail()}</Text>

            {/* phone number input */}
            <Text style={styles.text}>Phone number:</Text>
            <StartScreenInput
            inputInfo={userInfo.phone}
            inputInfoType='phone'
            passingInfo={handleInputData}
            />
            <Text style={styles.reminder}>{checkPhone()}</Text>

            {/* checkbox */}
            <StartCheckbox
            notRobotInfo={notRobot}
            handleCheckbox={handleCheckbox}
            />

            {/* Confirm and Cancel buttons */}
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              margin: 5,
            }}>
              <View style={styles.buttonSection}>
              <Button
                title='Reset'
                color={'red'}
                onPress={() => {
                  reset();
                }}
              />
              </View>
              <View style={styles.buttonSection}>
              <Button
                title='Register'
                disabled={!notRobot}
                onPress={() => { register() }}
              />
              </View>
            </View>
          </Card>
        </View>

        {/* bottom view are set empty */}
        <View style={styles.bottomView}>
        </View>
      </View>
    </LinearGradientBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  topView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardView: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  bottomView: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'purple',
    fontSize: 20,
    padding: 5,
    textAlign: 'left',
},
  reminder: {
    color: 'black',
    fontSize: 15,
    padding: 5,
    textAlign: 'left',
    margin: 5,
  },
  buttonSection: {
    flex: 1,
    margin: 5,
  }
});
