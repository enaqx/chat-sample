/**
 * Login component
 */

import React, { Component } from 'react';
import api from './api';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateField(name, ev) {
    this.setState({ [name]: ev.target.value });
  }

  login() {
    const { email, password } = this.state;
    return api.authenticate({
      strategy: 'local',
      email,
      password,
    }).catch(error => this.setState({ error }));
  }

  signup() {
    const { email, password } = this.state;
    return api.service('users')
      .create({ email, password })
      .then(() => this.login());
  }

  render() {
    return (
      <main className="login container">
        <div className="row">
          <div className="col-12 col-6-tablet push-3-tablet text-center heading">
            <h1 className="font-100">Chat</h1>
            <p>{this.state.error && this.state.error.message}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop">
            <form className="form">
              <fieldset>
                <input
                  className="block"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={ev => this.updateField('email', ev)}
                />
              </fieldset>
              <fieldset>
                <input
                  className="block"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={ev => this.updateField('password', ev)}
                />
              </fieldset>
              <button
                type="button"
                className="button button-primary block signup"
                onClick={() => this.login()}
              >
                Log In
              </button>
              <button
                type="button"
                className="button button-primary block signup"
                onClick={() => this.signup()}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }
}
