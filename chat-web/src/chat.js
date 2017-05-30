/**
 * Chat component
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import api from './api';

class Chat extends Component {
  sendMessage(ev) {
    const input = ev.target.querySelector('[name="text"]');
    const text = input.value.trim();

    if (text) {
      api.service('messages').create({ text }).then(() => {
        input.value = '';
      });
    }

    ev.preventDefault();
  }

  componentDidMount() {
    this.scrollToBottom = this.scrollToBottom.bind(this);
    api.service('messages').on('created', this.scrollToBottom);
    this.scrollToBottom();
  }

  componentWillUnmount() {
    api.service('messages').removeListener('created', this.scrollToBottom);
  }

  scrollToBottom() {
    const chat = this.chat;
    chat.scrollTop = chat.scrollHeight - chat.clientHeight;
  }

  render() {
    const { users, messages } = this.props;

    return <main className="flex flex-column">
      <header className="title-bar flex flex-row flex-center">
        <div className="title-wrapper block center-element">
          <span className="title">Chat</span>
        </div>
      </header>

      <div className="flex flex-row flex-1 clear">
        <aside className="sidebar col col-3 flex flex-column flex-space-between">
          <ul className="flex flex-column flex-1 list-unstyled user-list">
            {users.map(user => <li key={user._id}>
              <a className="block relative" href="#">
                <span className="absolute username">{user.email}</span>
              </a>
            </li>)}
          </ul>
          <footer className="flex flex-row flex-center">
            <a href="#" onClick={() => api.logout()} className="button button-primary">
              Sign Out
            </a>
          </footer>
        </aside>

        <div className="flex flex-column col col-9">
          <main className="chat flex flex-column flex-1 clear" ref={main => { this.chat = main; }}>
            {messages.map(message => <div key={message._id} className="message flex flex-row">
              <div className="message-wrapper">
                <p className="message-header">
                  <span className="username font-600">{message.user.email}  </span>
                  <span className="sent-date font-200">
                    {moment(message.createdAt).format('MMM Do hh:mm:ss')}
                  </span>
                </p>
                <p className="message-content font-400">{message.text}</p>
              </div>
            </div>)}
          </main>

          <form
            onSubmit={this.sendMessage.bind(this)}
            className="flex flex-row flex-space-between"
            id="send-message"
          >
            <input type="text" name="text" className="flex flex-1" />
            <button className="button-primary" type="submit">Send</button>
          </form>
        </div>
      </div>
    </main>;
  }
}



export default Chat;
