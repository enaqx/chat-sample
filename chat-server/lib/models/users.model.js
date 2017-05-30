/**
 * Users model
 */

import NeDB from 'nedb';
import path from 'path';

export default function(app) {
  const Model = new NeDB({
    filename: path.join(app.get('dbPath'), 'users.db'),
    autoload: true,
  });

  Model.ensureIndex({ fieldName: 'email', unique: true });

  return Model;
}
