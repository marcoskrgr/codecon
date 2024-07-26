const { ContactsService } = require('../services');

const ContactsController = {
    getContacts: async (req, res) => {
        try {
            const contacts = await ContactsService.getContacts();
            res.status(200).json({ ...contacts });
        } catch (e) {
            res.status(400).json({ error: e.message });;
        }
    }
}

module.exports = ContactsController;