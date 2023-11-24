const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('projet_cloud', 'postgres', '2001', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;