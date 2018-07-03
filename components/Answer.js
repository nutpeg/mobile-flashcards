import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Answer extends Component {
  static navigationOptions = { header: null  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.answerText}>
          {this.props.navigation.getParam('answer')}
        </Text>
        <Button
          onPress={() => this.props.navigation.popToTop()}
          title="Back to question"
        />
      </View>
    );
  }
}

export default Answer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  answerText: {
    marginBottom: 40,
    paddingHorizontal: 20,
  },
});
