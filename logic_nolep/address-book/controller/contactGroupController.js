const ContactGroups = require('../model/contactGroup')

module.exports = {
    create(args) {
        let [contactId, groupId] = args
        ContactGroups.create(contactId, groupId)
            .then(result => console.log('Relation added:', result))
            .catch(err => console.log(err.message))
    },

    update(args) {
        let [id, contactId, groupId] = args;
        ContactGroups.update(id, contactId, groupId)
            .then(msg => console.log(msg))
            .catch(err => console.log(err.message))
    },

    delete(args) {
        let [id] = args;
        ContactGroups.delete(id)
            .then(msg => console.log(msg))
            .catch(err => console.oog(err.message))
    }
}
