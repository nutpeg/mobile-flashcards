import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

const CustomButton = ({ onPress, buttonText }) => (
  <TouchableOpacity onPress={onPress} style={styles.inputContainer}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </View>
  </TouchableOpacity>
);

export default CustomButton;

const styles = StyleSheet.create({
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
