/**
 * Users service test
 */

import assert from 'assert';
import app from '../../lib';

describe('users service', () => {
  it('registered the service', () => {
    const service = app.service('users');
    assert.ok(service, 'Registered the service');
  });
});
