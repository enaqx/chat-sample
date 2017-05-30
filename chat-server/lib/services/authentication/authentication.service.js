/**
 * Authentication service
 */

import authentication from 'feathers-authentication';
import jwt from 'feathers-authentication-jwt';
import local from 'feathers-authentication-local';

export default function() {
  const app = this;
  const config = app.get('authentication');

  /* Set up authentication with the secret and JWT */
  app.configure(authentication(config));
  app.configure(jwt());
  app.configure(local(config.local));

  app.service('authentication').hooks({
    before: {
      create: [ authentication.hooks.authenticate(config.strategies) ],
      remove: [ authentication.hooks.authenticate('jwt') ],
    },
  });
}
