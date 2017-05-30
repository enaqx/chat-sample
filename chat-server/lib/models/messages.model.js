/**
 * Messages model
 */

import NeDB from 'nedb';
import path from 'path';

export default function(app) {
  const Model = new NeDB({
    filename: path.join(app.get('dbPath'), 'messages.db'),
    autoload: true,
  });

  return Model;
}
