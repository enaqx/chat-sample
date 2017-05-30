const logger = require('winston');

const app = process.env.NODE_ENV === 'production' ?
  require('./dist').default:
  require('./lib').default;

const port = app.get('port');
const server = app.listen(port);

process.on('unhandledRejection', (reason, promise) =>
  logger.error('Unhandled Rejection at: Promise ', promise, reason)
);

server.on('listening', () =>
  logger.info(`Feathers application started on ${app.get('host')}:${port}`)
);
