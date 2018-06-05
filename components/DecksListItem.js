import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../utils/colors';
import pluralize from '../utils/pluralize';

export default function DeckListItem({ title, cardCount, onPress }) {
  return (
    <TouchableHighlight
      underlayColor={colors.greyLight}
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.deckInfo}>
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.secondaryText}>
            {`${cardCount} ${pluralize('card', cardCount)}`}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

DeckListItem.propTypes = {
  title: PropTypes.string.isRequired,
  cardCount: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
  },
  deckInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  details: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 20,
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryText: {
    color: colors.greyDark,
    fontSize: 16,
    marginTop: 4,
  },
});
