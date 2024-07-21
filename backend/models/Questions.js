const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Questions = sequelize.define('Question', {
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    level: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
});

module.exports = Questions;