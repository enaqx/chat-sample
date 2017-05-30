/**
 * Signup screen
 */

import React, { Component } from 'react';
import { Alert, Keyboard, TextInput, View, TouchableWithoutFeedback } from 'react-native';
import { autobind } from 'core-decorators';
import { observable } from 'mobx';
import { observer } from 'mobx-react/native';
import { Button } from 'react-native-elements';
import Icons from '../components/Icons';
import styles from './styles';

@autobind @observer
export default class Signup extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Sign Up',
    headerLeft: Icons.closeButton(navigation.goBack)
  });

  @observable email = '';
  @observable password = '';
  @observable loading = false;

  constructor(props) {
    super(props);
    this.store = this.props.screenProps.store;
  }

  signup() {
    if (this.email.length === 0 || this.password.length === 0) return;
    this.loading = true;
    this.store.createAccount(this.email, this.password).catch(error => {
      Alert.alert('Error', 'Invalid email or password');
      this.loading = false;
    });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.inputs}>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, styles.darkFont]}
                autoFocus={true}
                placeholder='Email'
                placeholderTextColor='#AAA'
                autoCorrect={false}
                autoCapitalize='none'
                keyBoardType='email-address'
                returnKeyType='next'
                value={this.email}
                onChangeText={email => { this.email = email }}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                secureTextEntry={true}
                style={[styles.input, styles.darkFont]}
                placeholder='Password'
                placeholderTextColor='#AAA'
                autoCorrect={false}
                autoCapitalize='none'
                returnKeyType='send'
                value={this.password}
                onChangeText={password => { this.password = password }}
              />
            </View>
            <View style={{ height: 60 }}>
              <Button
                title='Sign Up'
                onPress={this.signup}
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
