import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const SelectedButton = ({ children }) => {
  const { selectedButtonStyle, selectedStyle } = styles;
  console.log('rendering a selected button');
  return (
    <TouchableOpacity style={selectedButtonStyle}>
      <Text style={selectedStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  selectedButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#aaa',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#AB4a5f',
    marginLeft: 5,
    marginRight: 5
  },
  selectedStyle: {
    alignSelf: 'center',
    color: '#007a0f',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { SelectedButton };
