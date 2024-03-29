'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Evento.init({
    idUsuario: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    dataInicio: DataTypes.DATE,
    dataFim: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Evento',
  });
  return Evento;
};