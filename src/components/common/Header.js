import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';


//Make a component
const Header = ({ headerText, headerBackgroundColor }) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={[viewStyle, { backgroundColor: headerBackgroundColor }]}>
            <TouchableOpacity style={styles.iconWrapper}>
                <Image source={require('../../../assets/icons/arrowleftcp.png')} style={styles.icon} resizeMode="contain" />
            </TouchableOpacity>
            <Text style={textStyle}>{headerText}</Text>
            <TouchableOpacity style={styles.iconWrapper}>
                {/* <Image source={require('../../assets/icons/menucp.png')} style={styles.icon} resizeMode="contain" /> */}
            </TouchableOpacity>
        </View>

    );
};

const styles = {
    textStyle: {
        fontSize: 23,
    },
    viewStyle: {
        display:'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        justifyContent:'space-between',
    },
    iconWrapper: {
        width: 30,
        height: 24,
        marginLeft: 16
      },
};
// Justify-content: its for the vertical axis! flex-start, center, flex-end
// alignItems: its for the horizontal axis! flex-start, center, flex-end
//Make the component available to other parts of the app   backgroundColor: '#F8F8F8',
export { Header };
