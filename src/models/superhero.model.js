const mongoose = require('mongoose');
const superheroSchema = mongoose.Schema({
  superhero_name: { type: String, require: true, unique: true },
  real_name: { type: String, require: true },
  features_superhero: {
    type: Object,
    require: true,
    superpowers: { type: Array, require: true },
    soft_spot: { type: String, require: true },
    universe: { type: String, require: true },
  },
});

module.exports = mongoose.model('SuperheroesCollection', superheroSchema);
