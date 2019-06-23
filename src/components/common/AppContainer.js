import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Header } from '../common';
import StatusBar from '../../styles/statusBar/GeneralStatusBarColor';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../styles/colors';

const AppContainer = ({ children,
    barStyle = "light-content",
    containerBackgroundColor,
    headerBackgroundColor,
    headerText,
    showHeader = true, 
    navigation,
    showBackArrow = false,
    headerTextColor,
    linearGradient= false,
    gradientColors = [colors.eastBay,colors.cadetBlue]}
    ) => {
    if (linearGradient) {
        if (showHeader) {
            return (
                <LinearGradient
                    style={[{ flex: 1 }]}
                    colors={gradientColors}
                    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                >
                    <StatusBar
                        backgroundColor={headerBackgroundColor}
                        barStyle={barStyle}
                    />
                    <Header headerText={headerText} headerBackgroundColor={headerBackgroundColor} navigation={navigation} showBackArrow={showBackArrow} headerTextColor={headerTextColor}/>
                    <SafeAreaView style={{ marginHorizontal: 8, marginTop: 8, backgroundColor: containerBackgroundColor, flex: 1 }}>
                        {children}
                    </SafeAreaView>
                </LinearGradient>
            );
        } else {
            return (
                <LinearGradient
                    style={[{ flex: 1 }]}
                    colors={gradientColors}
                    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                >
                    <StatusBar
                        backgroundColor={headerBackgroundColor}
                        barStyle={barStyle}
                    />
                    <SafeAreaView style={{ marginHorizontal: 8, marginTop: 8, backgroundColor: containerBackgroundColor, flex: 1 }}>
                        {children}
                    </SafeAreaView>
                </LinearGradient>
            );
        }
    } else {
        if (showHeader) {
            return (
                <View style={{ backgroundColor: containerBackgroundColor, flex: 1 }}>
                    <StatusBar
                        backgroundColor={headerBackgroundColor}
                        barStyle={barStyle}
                    />
                    <Header headerText={headerText} headerBackgroundColor={headerBackgroundColor} navigation={navigation} showBackArrow={showBackArrow} headerTextColor={headerTextColor}/>
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
                    barStyle={barStyle}
                />
                <SafeAreaView style={{ marginHorizontal: 8, marginTop: 8, backgroundColor: containerBackgroundColor, flex: 1 }}>
                    {children}
                </SafeAreaView>
            </View>
        );
    }
};

export { AppContainer };