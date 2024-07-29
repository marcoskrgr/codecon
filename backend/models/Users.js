const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Users = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    hasPlayed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'player',
    }
});

module.exports = Users;