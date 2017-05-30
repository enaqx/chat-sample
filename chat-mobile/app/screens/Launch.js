/**
 * Launch screen
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { autobind } from 'core-decorators';

@autobind
export default class Launch extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.label}>Chat</Text>
        </View>
        <View style={styles.bottom}>
          <Button
            title='Log In'
            backgroundColor='gray'
            buttonStyle={styles.loginButton}
            onPress={() => this.props.navigation.navigate('Login')}
          />
          <Button
            title='Sign Up'
            onPress={() => this.props.navigation.navigate('Signup')}
            backgroundColor='gray'
            buttonStyle={styles.signupButton}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 150,
  },
  label: {
    fontSize: 38,
    fontWeight: '300',
    color: 'gray'
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flex: 0,
    paddingBottom: 15
  },
  loginButton: {
    borderRadius: 5,
  },
  signupButton: {
    marginTop: 10,
    borderRadius: 5
  }
});
