const Evento = require('../models/evento');

module.exports = class HomeController {
  static index(req, res, next) {
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
