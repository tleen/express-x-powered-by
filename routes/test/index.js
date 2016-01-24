'use strict';

const express = require('express'),
      app = module.exports = express();

// uncomment to disable the x-powered-by header
// app.disable('x-powered-by');

app.use('/', (req, res, next) => {
  return res.json({
    'from': 'test',
    'now': new Date
  });
});
