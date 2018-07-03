import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

const CustomButton = ({ onPress, buttonText, disabled }) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    style={styles.buttonContainer}
  >
    <View style={[styles.button, disabled && styles.inactiveButton]}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </View>
  </TouchableOpacity>
);

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 30,
    height: 60,
    width: 380,
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
    borderRadius: 5,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveButton: {
    backgroundColor: colors.greyDark,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
  },
});
