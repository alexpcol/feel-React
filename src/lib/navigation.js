export const navigationOptions = ({ navigation }) => ({
  drawerLockMode: navigation.state.index > 0 ? 'locked-closed' : 'unlocked',
});
