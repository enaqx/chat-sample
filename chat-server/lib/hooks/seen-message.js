/**
 * Seen message hook
 */

export default function() {
  return function(hook) {
    const user = hook.params.user;

    // console.log(hook.app.service('messages').Model.update(msg._id, Object.assign(msg, { seen: true }));

    hook.app.service('messages').find().then(msgs =>
      msgs.data.forEach((msg) => {
        hook.app.service('messages').Model.update({ _id: msg._id }, { $set: { seen: true } });
        // if (msg) hook.app.service('messages').update(msg._id, Object.assign(msg, { seen: true }));
      }),
    );

    // /* Strip message to 500 characters and provide HTML escaping */
    // const text = hook.data.text
    //   .substring(0, 400)
    //   .replace(/&/g, '&amp;')
    //   .replace(/</g, '&lt;')
    //   .replace(/>/g, '&gt;');
    //
    // hook.data = {
    //   text,
    //   userId: user._id,
    //   createdAt: new Date().getTime(),
    //   seen: false,
    // };
    //
    return Promise.resolve(hook);
  };
}
