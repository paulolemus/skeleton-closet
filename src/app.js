const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');

const routesRouter = require('./routes');

const app = express();

// Middleware.
app.use(bodyParser.json());
app.use(compression());
app.use(helmet());

app.use(routesRouter);

module.exports = app;
