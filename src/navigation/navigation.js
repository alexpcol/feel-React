import { createStackNavigator, createAppContainer } from "react-navigation";
import Walkthrough from '../screens/Walkthrough'
import DemoScreen from '../screens/DemoScreen'

const AppNavigator = createStackNavigator({
    Walkthrough: {
        screen: Walkthrough,
    },
    DemoScreen: {
        screen: DemoScreen,
    }
}, {
    initialRouteName: 'DemoScreen',
    headerMode:'none',
});

export default createAppContainer(AppNavigator);