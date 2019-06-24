import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import StatusBar from '../styles/statusBar/GeneralStatusBarColor';
import { connect } from 'react-redux';
import { walktroughSeen } from '../actions/app'
import { colors } from '../styles/colors'

class Walkthrough extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }
  _onDone = () => {
    this.props.walktroughSeen()
    this.props.navigation.goBack()
  };
  render() {
    return (
      <LinearGradient
        style={[styles.mainContent, {
          flex: 1
        }]}
        colors={[colors.eastBay, colors.cadetBlue]}
        start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
      >
          <StatusBar
              barStyle='light-content'
          />   
          <AppIntroSlider
            slides={slides}
            onDone={this._onDone}
          />
        </LinearGradient>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}
export default connect(mapStateToProps, {
  walktroughSeen,
})(Walkthrough);

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    color: colors.alabasterWhite,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: colors.alabasterWhite,
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20
  },
  image: {
    width: 320,
    height: 320,
  },
});
 
const slides = [
  {
    key: 's1',
    text: 'Best Recharge offers',
    title: 'Mobile Recharge',
    titleStyle: styles.title,
    textStyle: styles.text,
    image: {
      uri:
        'https://aboutreact.com/wp-content/uploads/2018/08/mobile_recharge.png',
    },
    imageStyle: styles.image,
  },
  {
    key: 's2',
    title: 'Flight Booking',
    text: 'Upto 25% off on Domestic Flights',
    titleStyle: styles.title,
    textStyle: styles.text,
    image: {
      uri:
        'https://aboutreact.com/wp-content/uploads/2018/08/flight_ticket_booking.png',
    },
    imageStyle: styles.image,
  },
  {
    key: 's3',
    title: 'Great Offers',
    text: 'Enjoy Great offers on our all services',
    titleStyle: styles.title,
    textStyle: styles.text,
    image: {
      uri: 'https://aboutreact.com/wp-content/uploads/2018/08/discount1.png',
    },
    imageStyle: styles.image,
  }
];