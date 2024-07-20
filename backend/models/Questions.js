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
        isIn: {
            args: [[5, 10, 15]],
            msg: "Must be 5, 10 or 15"
        }
    },
});

module.exports = Questions;