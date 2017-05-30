/**
 * Service index
 */

import authentication from './authentication/authentication.service';
import messages from './messages/messages.service';
import users from './users/users.service';

export default function() {
  const app = this;
  app.configure(authentication);
  app.configure(messages);
  app.configure(users);
}
