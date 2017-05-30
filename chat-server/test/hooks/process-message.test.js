/**
 * Message process hook test
 */

import assert from 'assert';
import processMessage from '../../lib/hooks/process-message';

describe('process-message hook', () => {
  it('sends message', () => {
    const mock = {
      params: {
        user: {
          _id: '123',
        },
      },
      data: {
        text: 'testing message <br>',
      },
    };

    const hook = processMessage();

    return hook(mock).then((result) => {
      const { data } = result;
      assert.equal(data.userId, '123');
      assert.equal(data.text, 'testing message &lt;br&gt;');
      assert.ok(data.createdAt);
    });
  });
});
