'use sstrict';
const express = require('express');
const app = express();
const router = require('./router');

app.use(router);

function start(port) {
  app.listen(port, () => {
    console.log('server is up . . . ');
    console.log(`server is working at http://localhost:${port}`);
  });
}

module.exports = { start };
