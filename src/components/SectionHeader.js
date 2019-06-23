import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';

const iconClosed = require('../../assets/icons/adowncp.png')
const iconActive = require('../../assets/icons/aupcp.png')

export default ({ title, sectionIcon, isActive }) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.headerInfo}>
                <Image style={[styles.icon, { marginRight: 10 }]} source={sectionIcon} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <Image style={[styles.icon, { marginRight: 30 }]} source={isActive ? iconActive : iconClosed} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
        backgroundColor: '#ECE9E9'
    },
    header: {
        paddingVertical: 24,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'space-between',
    },
    headerInfo: {
        flex: 9,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,
    },
    headerText: {
        fontSize: 22,
        color: '#000000',
    },
    icon: {
        maxHeight: 42,
        maxWidth: 42,
    },
});
