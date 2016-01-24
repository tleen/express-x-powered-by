'use strict';

const express = require('express'),
      app = module.exports = express();

// uncomment to disable the x-powered-by header
// app.disable('x-powered-by');

app.all('/', (req, res, next) => {
  return res.json({
    'from': 'test',
    'now': new Date
  });
});


app.all('/alt', (req, res, next) => {
  return res.json({
    'from': 'test alt',
    'now': new Date
  });
});
