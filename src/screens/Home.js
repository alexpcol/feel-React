import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { answerQuestion } from '../actions/survey';
import { searchPlaylist } from '../actions/spotify';
import { AppContainer } from '../components/common';
import { colors } from '../styles/colors';

class SurveyScreen extends Component {
  state = {
    isLoading: false
  }
  testEmotion = () => {
    //this.props.answerQuestion('I am gratefull you are ok')
    this.props.searchPlaylist('happy', this.props.token)
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
  }
  render() {
    if (this.state.isLoading) {
      console.log('heklkl')
    }
    return (
      <AppContainer
        containerBackgroundColor={colors.cadetBlue}
        headerText="Hello"
        navigation={this.props.navigation}
      >
        <View style={{ flex: 1, backgroundColor: 'red', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Text>Hello</Text>
          <TouchableOpacity onPress={this.testEmotion}>
            <Text>Hello</Text>
          </TouchableOpacity>
          <View style={{ backgroundColor: 'green', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Hello</Text>
            <Text>Hello</Text>
          </View>

        </View>
      </AppContainer>

    );
  }
}
function mapStateToProps(state) {
  return {
    emotions: state.survey.emotions,
    token: state.auth.token
  };
}
export default connect(mapStateToProps, {
  answerQuestion,
  searchPlaylist
})(SurveyScreen);
