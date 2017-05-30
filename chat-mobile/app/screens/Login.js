/**
 * Login screen
 */

import React, { Component } from 'react';
import { Alert, Keyboard, Text, TextInput, View, TouchableWithoutFeedback } from 'react-native';
import { autobind } from 'core-decorators';
import { observable } from 'mobx';
import { observer } from 'mobx-react/native';
import { Button } from 'react-native-elements';
import Icons from '../components/Icons';
import styles from './styles';

@autobind @observer
export default class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Log In',
    headerLeft: Icons.closeButton(navigation.goBack)
  });

  @observable email = '';
  @observable password = '';
  @observable loading = false;

  constructor(props) {
    super(props);
    this.store = this.props.screenProps.store;
  }

  login() {
    if (this.email.length === 0 || this.password.length === 0) return;
    this.loading = true;
    this.store.login(this.email, this.password).catch(error => {
      this.loading = false;
      Alert.alert('Error', 'Wrong email or password');
    });
  }

  render() {
    const commonInputProps = {
      style: [styles.input, styles.greyFont],
      underlineColorAndroid: 'transparent',
      placeholderTextColor: '#AAA',
      autoCorrect: false,
      autoCapitalize: 'none',
    };

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.inputs}>
            <View style={styles.inputContainer}>
              <TextInput
                {...commonInputProps}
                autoFocus={true}
                placeholder='Email'
                keyBoardType='email-address'
                returnKeyType='next'
                value={this.email}
                onChangeText={email => { this.email = email }}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                {...commonInputProps}
                secureTextEntry={true}
                placeholder='Password'
                returnKeyType='send'
                value={this.password}
                onChangeText={password => { this.password = password }}
              />
            </View>
            <View style={{ height: 60 }}>
              <Button
                title='Log In'
                onPress={this.login}
                backgroundColor='gray'
                buttonStyle={{ marginTop: 20, borderRadius: 5 }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
