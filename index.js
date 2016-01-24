'use strict';

const express = require('express'),
      app = module.exports = express(),
      PORT = 8080;

app.disable('x-powered-by');



app.all('/', (req, res, next) => {
  return res.json({
    'now' : new Date
  });
});

app.use('/test', require('./routes/test'));

app.listen(PORT, () => { console.log(`app listening on ${PORT}`) });
