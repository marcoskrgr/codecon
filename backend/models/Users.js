const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Users = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoincrement: true,
        primaryKey: true
    },
    name: {
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
        allowNull: false
    },
    hasPlayed: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'player',
    }
});

module.exports = Users;