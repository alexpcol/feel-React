import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { answerQuestion, saveOption } from '../actions/survey';
import { AppContainer } from '../components/common';
import { colors } from '../styles/colors';

const survey = [
  {
    key: 'q1',
    question: 'Which option describes better your morning?',
    options: [
      {
        key: 'o1',
        text: 'Splendid, thanks! And yours?',
      },
      {
        key: 'o2',
        text: 'Could have been worse. I’m not on fire',
      },
      {
        key: 'o3',
        text: 'I was mad because the coffee at the office was terrible',
      },
      {
        key: 'o4',
        text: 'Tired I had to work all night because a project that makes me nervous',
      }
    ]
  },
  {
    key: 'q2',
    question: 'How was your day at work?',
    options: [
      {
        key: 'o5',
        text: 'I was excited about the activities I had to do and I really enjoy them',
      },
      {
        key: 'o6',
        text: 'If stress burned calories, I’d be a supermodel',
      },
      {
        key: 'o7',
        text: 'I got sick..fever, all congested. Did not go to work...had to call in sick',
      },
      {
        key: 'o8',
        text: 'I spend a lot of my time in meetings, which are totally not productive for me',
      }
    ]
  },
  {
    key: 'q3',
    question: 'Is there anything new you learned today?',
    options: [
      {
        key: 'o9',
        text: 'Yes and It was something really useful',
      },
      {
        key: 'o10',
        text: 'Uhmm not really I have to many activities to finish',
      },
      {
        key: 'o11',
        text: 'I figured out how to solve a big problem!',
      },
      {
        key: 'o12',
        text: 'No nothing can suprise me at this point',
      }
    ]
  }
]

class SurveyScreen extends Component {
  state = {
    questionIndex: 0,
  }
  testEmotion = () => {
    //this.props.answerQuestion('I am gratefull you are ok')
    this.props.searchPlaylist('happy', this.props.token)
  }

  getEmotion = item => () => {
    this.props.saveOption(item.key)
    this.props.answerQuestion(item.text)
  };

  renderOption = ({ item, index }) => {
    return (
      <TouchableOpacity key={index} style={styles.buttonStyle} onPress={this.getEmotion(item)}>
        <Text style={styles.textOption}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  navigateToNextScreen = () => {
    console.log('Next Screen!')
  };

  componentWillReceiveProps(nextProps) {
    switch (nextProps.emotions.length) {
      case 1:
        this.setState({
          questionIndex: 1
        })
        break
      case 2:
        this.setState({
          questionIndex: 2
        })
        break
      case 3:
        this.navigateToNextScreen()
        break
    }
  }


  render() {
    return (
      <AppContainer
        containerBackgroundColor={colors.cadetBlue}
        headerText="Survey"
        headerTextColor={colors.alabasterWhite}
        navigation={this.props.navigation}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{survey[this.state.questionIndex].question}</Text>
          <FlatList
            contentContainerStyle={styles.listContent}
            data={survey[this.state.questionIndex].options}
            keyExtractor={(item, index) => {
              return item.key
            }}
            renderItem={this.renderOption}
          />
        </View>
      </AppContainer>

    );
  }
}
function mapStateToProps(state) {
  return {
    emotions: state.survey.emotions,
    optionsSelected: state.survey.optionsSelected,
    token: state.auth.token
  };
}
export default connect(mapStateToProps, {
  answerQuestion,
  saveOption
})(SurveyScreen);

const styles = StyleSheet.create({
  title: {
    color: colors.alabasterWhite,
    fontWeight: 'bold',
    fontSize: 40,
  },
  buttonStyle: {
    borderColor: colors.alabasterWhite,
    borderWidth: 3,
    borderRadius: 14,
    marginTop: 30,
    padding: 10
  },
  textOption: {
    color: colors.alabasterWhite,
    fontWeight: '600',
    fontSize: 28,
  },
  listContent: {
    paddingVertical: 8
  }
});

