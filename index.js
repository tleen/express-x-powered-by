'use strict';

const express = require('express'),
      app = module.exports = express(),
      PORT = 8080;

app.disable('x-powered-by');

var r = new express.Router();

r.all('/', (req, res, next) => {
  return res.json({
    'now' : new Date
  });
});

var r2 = new express.Router();
r2.use('/test', require('./routes/test'));

app.use(r);
app.use(r2);

app.listen(PORT, () => { console.log(`app listening on ${PORT}`) });
