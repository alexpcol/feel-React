import React, { Component } from 'react';
import { Alert } from 'react-native';

export const _showAlert = ({ doAction = () => console.log('OK Pressed'),
    alertTitle,
    alertMessage,
    doActionTitle = 'ok',
    cancelActionTitle = 'cancel',
    isOKAlert = false,
}) => {
    console.log(isOKAlert);
    console.log(alertTitle);
    if (isOKAlert) {
        Alert.alert(
            `${alertTitle}`,
            `${alertMessage}`,
            [
                { text: `${doActionTitle}`, onPress: () => console.log('OK') },
            ],
            { cancelable: false }
        );
    } else {
        Alert.alert(
            `${alertTitle}`,
            `${alertMessage}`,
            [
                { text: `${cancelActionTitle}`, onPress: () => console.log('NO Pressed'), style: 'cancel' },
                { text: `${doActionTitle}`, onPress: doAction },
            ],
            { cancelable: false }
        );
    }
}