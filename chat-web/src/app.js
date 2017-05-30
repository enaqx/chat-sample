/**
 * Root component
 */

import React, { Component } from 'react';
import Login from './login';
import Chat from './chat';
import api from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const messages = api.service('messages');
    const users = api.service('users');

    /* Try to authenticate with the JWT stored in localStorage */
    api.authenticate().catch(() => this.setState({ login: null }));

    /* On successfull login */
    api.on('authenticated', login => {
      /* Get all users and messages */
      Promise.all([
        messages.find({
          query: {
            $sort: { createdAt: -1 },
            $limit: 25,
          }
        }),
        users.find(),
      ]).then(([ messagePage, userPage ]) => {
        const messages = messagePage.data.reverse();
        const users = userPage.data;
        this.setState({ login, messages, users });
      });
    });

    /* Reset local state on logout */
    api.on('logout', () => this.setState({
      login: null,
      messages: null,
      users: null,
    }));

    /* Add new messages to the message list */
    messages.on('created', message => this.setState({
      messages: this.state.messages.concat(message)
    }));

    /* Add new users to the user list */
    users.on('created', user => this.setState({
      users: this.state.users.concat(user)
    }));
  }

  render() {
    if (this.state.login === undefined) {
      return <main></main>;
    } else if (this.state.login) {
      return <Chat messages={this.state.messages} users={this.state.users} />
    }

    return <Login />;
  }
}

export default App;
