const Evento = require('../models/evento');

module.exports = class HomeController {
  static async index(req, res, next) {
    res.status(200).send([]);
  }
};
