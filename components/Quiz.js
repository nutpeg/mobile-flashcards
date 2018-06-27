import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../utils/colors';
import CustomButton from './CustomButton';

export default class Quiz extends Component {
  //  static navigationOptions = { header: null };
  static navigationOptions = ({ navigation }) => {
    return { headerTitle: navigation.getParam('title') + ' Quiz' };
  };

  nextIndex = (currentIndex, questionCount) => {
    let next = currentIndex + 1;
    if (next === questionCount) {
      return null;
    } else {
      return next;
    }
  };

  onLastQuestion = (currentIndex, questionCount) => {
    return currentIndex + 1 === questionCount;
  };

  onPressConfig = (
    questionIndex,
    cardCount,
    correctTally,
    title,
    questions,
    navigation,
    points = 0,
  ) => {
    if (this.onLastQuestion(questionIndex, cardCount)) {
      return () =>
        navigation.navigate('Score', {
          title,
          correctTally: correctTally + points,
          cardCount,
        });
    } else {
      return () =>
        navigation.push('Quiz', {
          questions,
          title,
          cardCount,
          correctTally: correctTally + points,
          questionIndex: questionIndex + 1,
        });
    }
  };

  render() {
    const {
      title,
      questions,
      cardCount,
      questionIndex,
      correctTally,
    } = this.props.navigation.state.params;
    const navigation = this.props.navigation;
    const question = questions[questionIndex].question;
    const answer = questions[questionIndex].answer;

    return (
      <View style={styles.container}>
        <View style={styles.countSection}>
          <Text style={styles.secondaryText}>
            {`${questionIndex + 1} of ${cardCount}`}
          </Text>
        </View>
        <View style={styles.questionSection}>
          <Text style={styles.questionText}>{question}</Text>
        </View>
        <TouchableOpacity
          style={styles.textButtonContainer}
          onPress={() => navigation.navigate('Answer', { answer })}
        >
          <Text style={styles.textButton}>Show answer</Text>
        </TouchableOpacity>
        <CustomButton
          onPress={this.onPressConfig(
            questionIndex,
            cardCount,
            correctTally,
            title,
            questions,
            navigation,
            1,
          )}
          buttonText="Correct"
        />
        <CustomButton
          onPress={this.onPressConfig(
            questionIndex,
            cardCount,
            correctTally,
            title,
            questions,
            navigation,
          )}
          buttonText="Incorrect"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  countSection: {
    // height: 30,
    width: '90%',
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
    marginTop: 20,
  },
  questionSection: {
    width: '90%',
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 15,
    marginTop: 10,
  },
  cardCount: {
    color: colors.greyDark,
    fontSize: 16,
    marginBottom: 20,
  },
  questionText: {
    color: colors.black,
    fontSize: 16,
  },
  secondaryText: {
    color: colors.greyDark,
    fontSize: 16,
    marginTop: 4,
  },
  textButtonContainer: {
    marginBottom: 20,
  },
  textButton: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});
