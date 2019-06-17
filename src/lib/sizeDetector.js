import { Dimensions, Platform } from 'react-native';

function isIphoneX() {
    const dim = Dimensions.get('window');

    return (
        // This has to be iOS
        Platform.OS === 'ios' &&
        (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
    );
}

function isIPhoneXSize(dim) {
    return dim.height === 812 || dim.width === 812;
}

function isIPhoneXrSize(dim) {
    return dim.height === 896 || dim.width === 896;
}


export default {
    isIphoneX,
};
