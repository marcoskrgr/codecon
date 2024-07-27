const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Users } = require('../models');

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
    }

}

module.exports = UsersService;