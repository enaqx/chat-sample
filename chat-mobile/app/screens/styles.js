/**
 * App styles
 */

import React, { StyleSheet, Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  inputs: {
    flex: 1,
    marginTop: height * 0.3,
  },

  inputContainer: {
    padding: 20,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
    borderColor: Platform.OS === 'ios' ? '#DDD' : 'transparent'
  },

  input: {
    position: 'absolute',
    left: 5,
    top: 0,
    right: 5,
    bottom: 0,
    height: 40,
    fontSize: 18,
    padding: 10
  },

  greyFont: {
    color: '#555'
  },

  darkFont: {
    color: '#000'
  },
});
