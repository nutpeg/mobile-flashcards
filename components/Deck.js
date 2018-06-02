import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Deck = () => (
  <View style={styles.container}>
    <Text>Deck</Text>
  </View>
);

export default Deck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
