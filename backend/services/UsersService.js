const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Users, History } = require('../models');

const UsersService = {
    register: async ({ name, password, email }) => {
        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await Users.create({ name, password: encryptedPassword, email });

        return user;
    },
    login: async ({ email, password }) => {
        const { dataValues: user } = await Users.findOne({ where: { email } });

        const correctPassword = await bcrypt.compare(password, user.password);

        if(!correctPassword){
            throw new Error('Wrong password or email.');
        }

        delete user.password

        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });

        return token;
    },
    getRanking: async ({ pages, size }) => {
        let page = pages || 1; // Página atual
        let pageSize = size || 10; // Tamanho da página

        const offset = (page - 1) * pageSize;
        const limit = pageSize;

        const ranking = await Users.findAndCountAll({
            include: {
                model: History,
                required: true,
            },
            limit: limit,
            offset: offset,
            order: [
                [History, 'points', 'DESC'],
                [History, 'time', 'DESC'],
            ],
        });

        return ranking;
    },
    getContacts: async () => {
        const contactsReturn = [];

        const contactsData = await Users.findAll({
        });

        contactsReturn.push(contactsData);

        return contactsReturn;
    },
    getUser: async ({ id }) => {
        const user = await Users.findOne({
            where: {
                id: id
            }
        })

        const userData = {
            id: user.dataValues.id,
            name: user.dataValues.name,
            email: user.dataValues.email,
            phone: user.dataValues.phone,
            hasPlayed: user.dataValues.hasPlayed,
            role: user.dataValues.role
        }

        return userData;
    }

}

module.exports = UsersService;