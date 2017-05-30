/**
 * Users service hooks
 */

import auth from 'feathers-authentication';
import authLocal from 'feathers-authentication-local';
import common from 'feathers-hooks-common';

const authenticate = auth.hooks.authenticate;
const hashPassword = authLocal.hooks.hashPassword;
const { when, discard } = common;

export default {
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ authenticate('jwt') ],
    create: [ hashPassword() ],
    update: [ authenticate('jwt') ],
    patch: [ authenticate('jwt') ],
    remove: [ authenticate('jwt') ],
  },

  after: {
    all: [when(hook => hook.params.provider, discard('password'))],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
