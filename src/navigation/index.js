import { createStackNavigator, createAppContainer } from "react-navigation";
import Walkthrough from '../screens/Walkthrough'
import DemoScreen from '../screens/DemoScreen'

const AppNavigator = createStackNavigator({
    DemoScreen: {
        screen: DemoScreen,
    }
}, {
    initialRouteName: 'DemoScreen',
    headerMode:'none',
});

const RootStack = createStackNavigator(
    {
      Main: {
        screen: AppNavigator,
      },
      Walkthrough: {
        screen: Walkthrough,
      },
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
  );

export default createAppContainer(RootStack);