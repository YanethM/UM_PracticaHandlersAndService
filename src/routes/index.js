const express = require('express');
const superheroRoutes = require('./superhero.routes');

function routerApi(app) {
  const routes = express.Router();
  app.use('/api/v2', routes);
  routes.use('/superheroes', superheroRoutes);
}

module.exports = routerApi;
