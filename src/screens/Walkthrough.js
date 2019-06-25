import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
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
        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
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
    marginBottom: 40
  },
  image: {
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 2.5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
  },
});

const slides = [
  {
    key: 's1',
    title: 'Behold to the new way to experience music',
    text: 'Just tell us a little about you and we will give you a very pleasant suprise',
    titleStyle: styles.title,
    textStyle: styles.text,
    image: {
      uri:
        'https://i.pinimg.com/564x/3c/f2/66/3cf2660612c488f3c60df3df316d04b7.jpg',
    },
    imageStyle: styles.image,
  },
  {
    key: 's2',
    title: 'Taking care of you with modern technologies',
    text: 'Just answer an easy survey and we will try figure out your current mood',
    titleStyle: styles.title,
    textStyle: styles.text,
    image: {
      uri:
        'https://i.pinimg.com/564x/3a/dd/cf/3addcfe7add17f74d3888b0a6e9911fc.jpg',
    },
    imageStyle: styles.image,
  },
  {
    key: 's3',
    title: 'Unlimited options for you and your current mood',
    text: 'With the help of Spotify we can offer you variety of content',
    titleStyle: styles.title,
    textStyle: styles.text,
    image: {
      uri: 'https://i.pinimg.com/564x/0e/f7/30/0ef730136bcaf3758b5f2a04d1043e1a.jpg',
    },
    imageStyle: styles.image,
  }
];