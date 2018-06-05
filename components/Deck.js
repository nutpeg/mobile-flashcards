import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import pluralize from '../utils/pluralize';
import CustomButton from './CustomButton';

export default class Deck extends Component {
  static navigationOptions = { headerTitle: 'Deck Info' };

  render() {
    const {
      deck: { title, questions },
      cardCount,
    } = this.props.navigation.state.params;
    const navigate = this.props.navigation.navigate;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.secondaryText}>
          {`${cardCount} ${pluralize('card', cardCount)}`}
        </Text>
        <CustomButton
          disabled={cardCount === 0}
          onPress={() =>
            navigate('Quiz', {
              questions,
              title,
              cardCount,
              questionIndex: 0,
            })
          }
          buttonText="Start a quiz"
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
