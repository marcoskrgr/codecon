const sequelize = require('../config/database')
const Users = require('./Users')
const Questions = require('./Questions')
const Answers = require('./Answers')
const History = require('./History')

// Definindo os relacionamentos
Questions.hasMany(Answers, { foreignKey: 'questionId' });
Answers.belongsTo(Questions, { foreignKey: 'questionId' });

Users.hasMany(History, { foreignKey: 'userId' });
History.belongsTo(Users, { foreignKey: 'userId' });

module.exports = {
    sequelize,
    Users,
    Questions,
    Answers,
    History,
};