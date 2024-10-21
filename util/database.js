const Sequelize = require('sequelize');
const password = require('../pass');

const sequelize = new Sequelize('node-complete', 'root', password, {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;