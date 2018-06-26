import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { colors } from '../utils/colors';
import CustomButton from './CustomButton';
  
class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  onSubmitCard = () => {
    const question = this.state.question;
    const answer = this.state.answer;
    const title = this.props.navigation.state.params.title;
    const cardCount = this.props.navigation.state.params.cardCount;
    console.log('cardCount', cardCount);
    if (question === '' || answer === '') {
      return alert('Please enter a complete question and answer');
    }
    const card = {
      question,
      answer,
    };
    const deck = this.props.screenProps.getDeck(title);
    this.props.screenProps.addCardToDeck(title, card);
    this.setState(
      {
        question: '',
        answer: '',
      },
      () => {
        this.props.navigation.navigate('Deck', {
          deck,
          cardCount: cardCount + 1,
        });
      },
    );
  };

  render() {
    // const cardCount = this.props.navigation.state.params.cardCount;
    // console.log('inside cardCount', cardCount);
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.heading}>Add a Card</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Question"
            style={styles.input}
            underlineColorAndroid="transparent"
            onChangeText={val => this.onChangeText('question', val)}
            value={this.state.title}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Answer"
            style={styles.input}
            underlineColorAndroid="transparent"
            onChangeText={val => this.onChangeText('answer', val)}
            value={this.state.title}
          />
        </View>
        <CustomButton onPress={this.onSubmitCard} buttonText="Add Card" />
      </KeyboardAvoidingView>
    );
  }
}

export default AddCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 26,
    marginBottom: 20,
  },
  inputContainer: {
    paddingHorizontal: 30,
    height: 60,
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 18,
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  button: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
  },
});
