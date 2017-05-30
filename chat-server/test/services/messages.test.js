/**
 * Messages service test
 */

import assert from 'assert';
import app from '../../lib';

describe('messages service', () => {
  it('registered the service', () => {
    const service = app.service('messages');
    assert.ok(service, 'Registered the service');
  });
});
