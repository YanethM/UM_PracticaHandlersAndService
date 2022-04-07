const superheroSchema = require('../models/superhero.model');

class SuperheroService {
  async createSuperhero(superhero) {
    superhero.save();
    return superhero;
  }

  async listSuperheroes() {
    return superheroSchema.find();
  }

  async showSuperhero(superheroId) {
    return superheroSchema
      .findById({ _id: superheroId })
      .then((superheroFind) => {
        if (!superheroFind) throw Error('No se encontro el superheroe');
        return superheroFind;
      });
  }

  async updateSuperhero(
    superheroId,
    superhero_name,
    real_name,
    features_superhero
  ) {
    return superheroSchema
      .findById({ _id: superheroId })
      .then((superheroFind) => {
        if (!superheroFind) throw Error('No se encontro el superheroe');
        return superheroSchema.updateOne(
          { superheroId },
          { superhero_name, real_name, features_superhero }
        );
      });
  }

  async deleteSuperhero(superheroId) {}
}

module.exports = SuperheroService;
