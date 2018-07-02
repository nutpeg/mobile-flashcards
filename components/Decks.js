import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import DecksListItem from './DecksListItem';
import { colors } from '../utils/colors';
import CustomButton from './CustomButton';
import { fetchDecks, addCardToDeck } from '../actions';

const keyExtractor = ({ title }) => title;

class Decks extends Component {
  static navigationOptions = { title: 'Decks' };

  componentDidMount() {
    this.props.dispatch(fetchDecks());
  }

  addCard = (title, deck) => {
    this.props.dispatch(addCardToDeck(title, deck));
  };

  renderDeck = ({ item }) => {
    const { title, questions } = item;
    const cardCount = questions.length;
    return (
      <DecksListItem
        title={title}
        cardCount={cardCount}
        onPress={() =>
          this.props.navigation.navigate('Deck', {
            title,
            addCard: (title, deck) => this.addCard(title, deck),
          })
        }
      />
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {Object.keys(this.props.decks).length === 0 ? (
          <CustomButton
            onPress={() => this.props.navigation.navigate('AddDeck')}
            buttonText="Add your first deck"
          />
        ) : (
          <FlatList
            data={Object.values(this.props.decks)}
            keyExtractor={keyExtractor}
            renderItem={this.renderDeck}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});

function mapStateToProps(state) {
  return {
    decks: state,
  };
}

export default connect(mapStateToProps)(Decks);
