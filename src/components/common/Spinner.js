import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { colors } from '../../styles/colors';

const Spinner = ({ size = 'large', color = colors.alabasterWhite }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size} color={color} />
        </View>
    );
};

const styles = {
    spinnerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export { Spinner };
