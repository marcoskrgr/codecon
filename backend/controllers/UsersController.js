const UsersService = require('../services/UsersService')
const {RankingService, ContactsService} = require("../services");

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
    },
    getRanking: async(req, res) => {
        try {
            const ranking = await UsersService.getRanking(req.query);
            res.status(200).json({...ranking});
        } catch (e) {
            res.status(400).json({error: e.message});
        }
    },
    getContacts: async (req, res) => {
        try {
            const contacts = await UsersService.getContacts();
            res.status(200).json({ ...contacts });
        } catch (e) {
            res.status(400).json({ error: e.message });;
        }
    }
}

module.exports = UsersController;
