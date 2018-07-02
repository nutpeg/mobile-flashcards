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
    addCard(title, card)
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
