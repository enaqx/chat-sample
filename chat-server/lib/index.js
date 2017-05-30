/**
 * Chat server
 */

import path from 'path';
import bodyParser from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import feathers from 'feathers';
import configuration from 'feathers-configuration';
import handler from 'feathers-errors/handler';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest';
import socketio from 'feathers-socketio';
import services from './services';
import logger from './hooks/logger';

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compress());
app.use(cors());
app.use(helmet());
app.use(handler());
app.configure(hooks());
app.configure(rest());
app.configure(socketio());
app.configure(services);
app.hooks({
  after: { all: [ logger() ] },
  error: { all: [ logger() ] },
});

export default app;
