/**
 * Chat App
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { autobind } from 'core-decorators';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react/native';
import { StackNavigator } from 'react-navigation';
import Launch from './screens/Launch';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Chat from './screens/Chat';
import Settings from './screens/Settings';
import Store from './store';

const UnauthenticatedNavigator = StackNavigator({
  Launch: { screen: Launch},
  Login: { screen: Login },
  Signup: { screen: Signup },
}, {
  mode: 'modal'
});

const AuthenticatedNavigator = StackNavigator({
  Chat: { screen: Chat },
  Settings: { screen: Settings },
}, {
  mode: 'modal'
});

@autobind @observer
export default class Application extends Component {
  constructor(props) {
    super(props);
    this.store = new Store();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {
          this.store.isAuthenticated ?
            <AuthenticatedNavigator screenProps={{ store: this.store }}/> :
            <UnauthenticatedNavigator screenProps={{store: this.store}}/>
        }
      </View>
    );
  }
}
