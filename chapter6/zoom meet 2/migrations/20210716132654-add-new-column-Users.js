'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'Users',
        'description',
        Sequelize.STRING
      )
    },
  
    down: async (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'Users',
        'description',
      )
    }
};
