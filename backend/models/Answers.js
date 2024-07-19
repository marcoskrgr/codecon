const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const Questions = require('./Questions')

const Answers = sequelize.define('Answer', {
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    right: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    questionId: {
        type: DataTypes.BIGINT,
        references: {
            model: Questions,
            key: 'id',
        },
    },
});

Questions.hasMany(Answers, { foreignKey: 'questionId' });
Answers.belongsTo(Questions, { foreignKey: 'questionId' });

module.exports = Answers;