import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Answer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginBottom: 40 }}>
          {this.props.navigation.getParam('answer')}
        </Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
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
});
