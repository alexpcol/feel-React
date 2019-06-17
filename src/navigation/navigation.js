import { createStackNavigator, createAppContainer } from "react-navigation";
import Walkthrough from '../screens/Walkthrough'

const AppNavigator = createStackNavigator({
    Walkthrough: {
        screen: Walkthrough
    }
}, {
    initialRouteName: 'Walkthrough'
});

export default createAppContainer(AppNavigator);