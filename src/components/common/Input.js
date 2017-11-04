import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry
}) => {
  const { containerStyle, inputStyle, labelStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}> {label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        value={value}
        style={inputStyle}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    width: 100,
    height: 40,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    backgroundColor: '#A0A6C6'
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
