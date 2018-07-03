import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import { colors } from '../utils/colors';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';

class AddCard extends Component {
  static navigationOptions = { headerTitle: 'Add a card' };

  state = {
    question: '',
    answer: '',
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  onSubmitCard = () => {
    const { question, answer } = this.state;
    const { title, cardCount, addCard } = this.props.navigation.state.params;

    // Is question complete
    if (question === '' || answer === '') {
      return alert('Please enter a complete question and answer');
    }

    const card = {
      question,
      answer,
    };
    addCard(title, card);
    this.setState(
      {
        question: '',
        answer: '',
      },
      () => {
        this.props.navigation.navigate('Deck', {
          title,
        });
      },
    );
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.heading}>Add a Card</Text>
        <CustomInput
          placeholder="Question"
          onChangeText={val => this.onChangeText('question', val)}
          value={this.state.title}
        />
        <CustomInput
          placeholder="Answer"
          onChangeText={val => this.onChangeText('answer', val)}
          value={this.state.title}
          multiline={true}
        />
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
});
