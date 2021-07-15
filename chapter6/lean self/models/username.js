'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Username extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Username.init({
    username: DataTypes.STRING,
    passsword: DataTypes.TEXT,
    approved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Username',
  });
  return Username;
};