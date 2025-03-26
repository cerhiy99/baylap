const { Sequelize } = require('sequelize');

module.exports = new Sequelize('baylap', 'baylapUsername', 'password', {
  dialect: 'mysql',
  host: process.env.HOST,
});


require('dotenv').config();
/*const { Sequelize } = require('sequelize');

module.exports = new Sequelize('baylap', process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'mysql',
  host: process.env.HOST || 'localhost',
});

*/



