const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('codecondb', 'postgres', '111111', {
    host: 'db', // O nome do serviço no docker-compose.yml
    dialect: 'postgres',
});

module.exports = sequelize;