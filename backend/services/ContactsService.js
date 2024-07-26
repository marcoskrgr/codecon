const { Users } = require ('../models');

const ContactsService = {
    getContacts: async () => {
        const offset = 5;
        const contactsReturn = [];

        const contactsData = await Users.findAll({
        });

        contactsReturn.push(contactsData);

        return contactsReturn;
    }
}

module.exports = ContactsService;