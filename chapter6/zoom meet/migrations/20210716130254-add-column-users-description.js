'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addcolumn(
      'users',
      'description',
      Sequelize.STRING
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColun(
      'users',
      'description',
    )
  }
};
