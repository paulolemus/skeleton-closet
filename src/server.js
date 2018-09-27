const app = require('./app');
const config = require('./config');
const logger = require('./logger');

app.listen(config.port, () => {
  logger.debug(`App listening to port ${config.port} ...`);
});
