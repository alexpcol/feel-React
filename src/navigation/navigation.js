import { createStackNavigator, createAppContainer } from "react-navigation";
import Walkthrough from '../screens/Walkthrough'
import DemoScreen from '../screens/DemoScreen'

const AppNavigator = createStackNavigator({
    Walkthrough: {
        screen: Walkthrough,
        navigationOptions: {
            header: null,
        }
    },
    DemoScreen: {
        screen: DemoScreen,
    }
}, {
    initialRouteName: 'Walkthrough'
});

export default createAppContainer(AppNavigator);