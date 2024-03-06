const sequelize = require('../config/database');
const Evento = require('../models/evento');

module.exports = class HomeController {
  static async index(req, res, next) {
    try {
      await sequelize.authenticate();
      console.log('deu bão');
    } catch (error) {
      console.error('Deu ruim patrão', error);
    }

    res
      .status(200)
      .send([
        new Evento(),
        new Evento(),
        new Evento(),
        new Evento(),
        new Evento(),
      ]);
  }
};
