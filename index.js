const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routerApi = require('./src/routes');
require('dotenv').config();

const port = process.env.PORT;

app.listen(port, console.log('Active port', port));

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log('Success connection'))
  .catch((err) => console.error(err));

app.use(express.json());
routerApi(app);
