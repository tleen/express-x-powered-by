'use strict';

const express = require('express'),
      app = module.exports = express(),
      PORT = 8080;

app.disable('x-powered-by');

app.use((req, res, next) => {
  return res.json({
    'now' : new Date
  });
});

app.listen(PORT, () => { console.log(`app listening on ${PORT}`) });
