const UsersService = require('../services/UsersService')

const UsersController = {
    createUser: async (req, res) => {
        try {
            const user = await UsersService.register(req.body);
            res.status(200).json({ ...user });
        }
        catch (e){
            res.status(400).json({ error: e.message })
        }
    },
    login: async (req, res) => {
        try {
            const token = await UsersService.login(req.body);
            res.cookie('token', token, { httpOnly: true });
            return res.status(200).json({ success: true });
        }
        catch (e){
            res.status(400).json({ error: e.message })
        }
    }
}

module.exports = UsersController;
