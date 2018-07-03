import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

const CustomInput = ({
  placeholder,
  onChangeText,
  value,
  title,
  multiline = false,
}) => (
  <View
    // style={
    //   multiline
    //     ? styles.inputContainer
    //     : [styles.inputContainer, styles.inputContainerMultiline]
    // }
      style={
        multiline
          ? [styles.inputContainer, styles.inputContainerMultiline]
          : styles.inputContainer
      }
  >
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={onChangeText}
      value={title}
      multiline={multiline}
    />
  </View>
);

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    height: 60,
    width: 320,
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
  inputContainerMultiline: {
    height: 120,
  },
});
