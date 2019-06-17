import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Header } from '../common';
import StatusBar from '../../styles/statusBar/GeneralStatusBarColor';

const AppContainer = ({ children,
    containerBackgroundColor,
    headerBackgroundColor,
    headerText,
    showHeader = true, }) => {
    if (showHeader) {
        return (
            <View style={{ backgroundColor: containerBackgroundColor, flex: 1 }}>
                <StatusBar
                    backgroundColor={headerBackgroundColor}
                    barStyle="light-content"
                />
                <Header headerText={headerText} headerBackgroundColor={headerBackgroundColor} />
                <SafeAreaView style={{ marginHorizontal: 8, marginTop: 8, backgroundColor: containerBackgroundColor, flex: 1 }}>
                    {children}
                </SafeAreaView>
            </View>
        );
    }
    return (
        <View style={{ backgroundColor: containerBackgroundColor, flex: 1 }}>
            <StatusBar
                backgroundColor={containerBackgroundColor}
                barStyle="light-content"
            />
            <SafeAreaView style={{ marginHorizontal: 8, marginTop: 8, backgroundColor: containerBackgroundColor, flex: 1 }}>
                {children}
            </SafeAreaView>
        </View>
    );
};

export { AppContainer };