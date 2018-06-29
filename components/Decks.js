import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import DecksListItem from './DecksListItem';
import { colors } from '../utils/colors';
import CustomButton from './CustomButton';

const keyExtractor = ({ title }) => title;

class Decks extends Component {
  static navigationOptions = { title: 'Decks' };
  renderDeck = ({ item }) => {
    const { title, questions } = item;
    const navigate = this.props.navigation.navigate;
    const cardCount = questions ? questions.length : 0;
    return (
      <DecksListItem
        title={title}
        cardCount={cardCount}
        onPress={() => navigate('Deck', { deck: item, cardCount: cardCount })}
      />
    );
  };
  render() {
    console.log('decks? ', this.props.decks);
    const decks = this.props.screenProps.decks;
    return (
      <View style={styles.container}>
        {this.props.decks ? (
          <CustomButton
            onPress={() => this.props.navigation.navigate('AddDeck')}
            buttonText="Add your first deck"
          />
        ) : (
          <FlatList
            data={decks}
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
