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
}

// ,{
//     tableName: 'users' // nome da tabela no banco de dados
// }
);
// SE PRECISAR SINCRONIZAR A TABELA NO BANCO ↓
// sequelize.sync({ force: true }) // Use 'force: true' apenas para desenvolvimento, isso recriará a tabela e apagará os dados existentes
//     .then(() => {
//         console.log('Tabela Users sincronizada com sucesso.');
//     })
//     .catch(error => {
//         console.error('Erro ao sincronizar a tabela Users:', error);
//     });

module.exports = Users;