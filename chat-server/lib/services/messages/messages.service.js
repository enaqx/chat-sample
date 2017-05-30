/**
 * Messages service
 */

import db from 'feathers-nedb';
import model from '../../models/messages.model';
import hooks from './messages.hooks';

export default function() {
  const app = this;

  app.use('/messages', db({
    name: 'messages',
    Model: model(app),
    paginate: app.get('paginate'),
  }));

  app.service('messages').hooks(hooks);
}
