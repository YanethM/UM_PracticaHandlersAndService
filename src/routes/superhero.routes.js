const express = require('express');
const superhero_routes = express.Router();
const supehero_model = require('../models/superhero.model');

/* Llamamos el servicio y creamos una instancia de la clase */
const SuperheroService = require('../services/superhero.service');
const _service = new SuperheroService();

superhero_routes.get('/', async (req, res) => {
  try {
    const data = await _service.listSuperheroes();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = superhero_routes;
