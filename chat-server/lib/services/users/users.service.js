/**
 * Users service
 */

import db from 'feathers-nedb';
import model from '../../models/users.model';
import hooks from './users.hooks';

export default function() {
  const app = this;

  app.use('/users', db({
    name: 'users',
    Model: model(app),
    paginate: app.get('paginate'),
  }));

  app.service('users').hooks(hooks);
}
