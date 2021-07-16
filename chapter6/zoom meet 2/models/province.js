'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  province.init({
    name: DataTypes.STRING,
    province: DataTypes.TEXT,
    isactive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'province',
  });
  return province;
};