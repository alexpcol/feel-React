import { createStackNavigator, createAppContainer } from "react-navigation";
import Walkthrough from '../screens/Walkthrough'
import LoginScreen from '../screens/Login'
import HomeScreen from '../screens/Home'

const AppNavigator = createStackNavigator({
  HomeScreen: {
        screen: HomeScreen,
    }
}, {
    initialRouteName: 'HomeScreen',
    headerMode:'none',
});

const RootStack = createStackNavigator(
    {
      Main: {
        screen: LoginScreen,
      },
      Walkthrough: {
        screen: Walkthrough,
      },
      Home: {
        screen: AppNavigator
      }
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
  );

export default createAppContainer(RootStack);