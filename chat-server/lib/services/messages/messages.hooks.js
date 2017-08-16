/**
 * Messages service hooks
 */

import auth from 'feathers-authentication';
import common from 'feathers-hooks-common';
import processMessage from '../../hooks/process-message';
import seenMessage from '../../hooks/seen-message';

const authenticate = auth.hooks.authenticate;
const { populate } = common;

export default {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [processMessage()],
    update: [processMessage()],
    patch: [seenMessage()],
    remove: [],
  },

  after: {
    all: [
      populate({
        schema: {
          include: [
            {
              service: 'users',
              nameAs: 'user',
              parentField: 'userId',
              childField: '_id',
            },
          ],
        },
      }),
    ],
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
