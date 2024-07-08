const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Users = require('./Users');

const History = sequelize.define('History', {
    time: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    points: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    userId: {
        type: DataTypes.BIGINT,
        references: {
            model: Users,
            key: 'id',
        },
    },
});

Users.hasMany(History, { foreignKey: 'userId' });
History.belongsTo(Users, { foreignKey: 'userId' });

module.exports = History;
