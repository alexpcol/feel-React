import { createStackNavigator, createAppContainer } from "react-navigation";
import Walkthrough from '../screens/Walkthrough'
import LoginScreen from '../screens/Login'
import SurveyScreen from '../screens/Survey'
import ResultsScreen from '../screens/Results'

const AppNavigator = createStackNavigator({
  SurveyScreen: {
    screen: SurveyScreen,
  },
  ResultsScreen: {
    screen: ResultsScreen,
    navigationOptions: () => ({
      gesturesEnabled: false
    })
  }
}, {
    initialRouteName: 'SurveyScreen',
    headerMode: 'none',
  });

const RootStack = createStackNavigator(
  {
    Main: {
      screen: LoginScreen,
    },
    Walkthrough: {
      screen: Walkthrough,
    },
    Survey: {
      screen: AppNavigator
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default createAppContainer(RootStack);