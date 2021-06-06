'use strict';

const server = require('./src/server');
require('dotenv').config();
const PORT = process.env.PORT;
//import mongoose module
const mongoose = require('mongoose');
//connect mongoose to mongodb
mongoose
  .connect(process.env.MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.start(PORT);
  })
  .catch(error => {
    console.error('Could not start server', error.message);
  });
