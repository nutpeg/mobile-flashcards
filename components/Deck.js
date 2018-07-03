import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import pluralize from '../utils/pluralize';
import CustomButton from './CustomButton';
import { connect } from 'react-redux';

class Deck extends Component {
  static navigationOptions = { headerTitle: 'Deck Info' };

  render() {
    const {
      title,
      addCard,
    } = this.props.navigation.state.params;

    const { questions } = this.props.decks[title];
    const cardCount = questions.length;
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.secondaryText}>
          {`${cardCount} ${pluralize('card', cardCount)}`}
        </Text>
        <CustomButton
          disabled={cardCount === 0}
          onPress={() =>
            navigate('QuizModal', {
              questions,
              title,
              cardCount,
              questionIndex: 0,
              correctTally: 0,
            })
          }
          buttonText="Start a quiz"
        />
        <CustomButton
          onPress={() =>
            navigate('AddCard', {
              cardCount,
              title,
              questions,
              addCard,
            })
          }
          buttonText="Add a card"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 20,
  },
  secondaryText: {
    color: colors.greyDark,
    fontSize: 16,
    marginBottom: 20,
  },
});

function mapStateToProps(state) {
  return { decks: state };
}

export default connect(mapStateToProps)(Deck);
