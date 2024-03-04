module.exports = class HomeController {
  static index(req, res, next) {
    res.status(200).send({
      mensagem: 'node api',
      eventos: '/eventos.json',
    });
  }
};
