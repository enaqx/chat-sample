/**
 * Setting screen
 */

import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { autobind } from 'core-decorators';
import { observer } from 'mobx-react/native';
import { Button } from 'react-native-elements';
import Icons from '../components/Icons';
import { NavigationActions } from 'react-navigation'

@autobind @observer
export default class Settings extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Settings',
    headerLeft: Icons.closeButton(navigation.goBack)
  });

  render() {
    const user = this.props.screenProps.store.user;
    if (!user) return null;

    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.email}>{user.email}</Text>
        </View>
        <View style={styles.bottom}>
          <Button
            title='Sign Out'
            onPress={this.props.screenProps.store.promptForLogout}
            backgroundColor='gray'
            color={'white'}
            buttonStyle={styles.signoutButton}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 140
  },
  email: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: "200",
    color: '#333'
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 15,
  },
  signoutButton: {
    borderRadius: 5,
  },
});
