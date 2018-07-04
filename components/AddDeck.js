import React, { Component } from 'react';
import { KeyboardAvoidingView, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { connect } from 'react-redux';
import { addDeck, addCardToDeck } from '../actions';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';

class AddDeck extends Component {
  static navigationOptions = { headerTitle: 'Add a Deck' };
  state = {
    title: '',
  };

  onChangeText = title => {
    this.setState({ title });
  };

  addCard = (title, deck) => {
    this.props.dispatch(addCardToDeck(title, deck));
  };

  onSubmitDeck = () => {
    let chosenTitle = this.state.title;
    if (chosenTitle.trim() === '') {
      return alert('Please enter a deck title');
    }
    if (Object.keys(this.props.decks).includes(chosenTitle)) {
      return alert(
        'A deck with that name already exists. Please try a different name',
      );
    } else {
      this.props.dispatch(addDeck(chosenTitle));
      this.setState({ title: '' }, () => {
        this.props.navigation.navigate('Deck', {
          title: chosenTitle,
          addCard: (title, deck) => this.addCard(title, deck),
        });
      });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.heading}>Create a Deck</Text>
        <CustomInput
          placeholder="Deck Title"
          onChangeText={this.onChangeText}
          value={this.state.title}
        />
        <CustomButton onPress={this.onSubmitDeck} buttonText="Add Deck" />
      </KeyboardAvoidingView>
    );
  }
}

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

function mapStateToProps(state) {
  return {
    decks: state,
  };
}

export default connect(mapStateToProps)(AddDeck);
