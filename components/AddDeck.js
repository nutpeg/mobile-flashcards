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

class AddDeck extends Component {
  state = {
    title: '',
  };

  onChangeText = title => {
    this.setState({ title });
  };

  onSubmitDeck = () => {
    let chosenTitle = this.state.title;
    if (chosenTitle === '') {
      return alert('Please enter a deck title');
    }
    // if (chosenTitle) exists already,
    if (this.props.screenProps.getDeck(chosenTitle)) {
      return alert(
        'A deck with that name already exists. Please try a different name',
      );
    } else {
      this.props.screenProps.saveDeckTitle(chosenTitle);
      this.setState({ title: '' }, () => {
        this.props.navigation.navigate('Decks');
      });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.heading}>Create a Deck</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Deck title"
            style={styles.input}
            underlineColorAndroid="transparent"
            onChangeText={val => this.onChangeText(val)}
            value={this.state.title}
          />
        </View>
        <CustomButton onPress={this.onSubmitDeck} buttonText="Add Deck" />
      </KeyboardAvoidingView>
    );
  }
}

export default AddDeck;

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
