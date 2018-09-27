const express = require('express');
const supertest = require('supertest');
const routesRouter = require('./routes');

const app = express();
app.use(routesRouter);

describe('Routes Router', () => {
  test('It should respond to GET /', () => supertest(app).get('/').then((res) => {
    expect(res.statusCode).toBe(200);
  }));
});
