/**
 * Process message hook
 */

export default function() {
  return function(hook) {
    const user = hook.params.user;

    /* Strip message to 500 characters and provide HTML escaping */
    const text = hook.data.text
      .substring(0, 400)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    hook.data = {
      text,
      userId: user._id,
      createdAt: new Date().getTime(),
    };

    return Promise.resolve(hook);
  };
}
