const Contact = require('../model/contact');

module.exports = {
    create(args) {
        let [name, phoneNumber, company, email] = args;
        Contact.create(name, phoneNumber, company, email)
            .then(result => console.log('Created:', result))
            .catch(err => console.log('Error:', err.message))
    },

    update(args) {
        let [id, name, phoneNumber, company, email] = args;
        Contact.update(id, name, phoneNumber, company, email)
            .then(msg => console.log(msg))
            .catch(err => console.log(err.message));
    },

    delete(args) {
        let [id] = args;
        Contact.delete(id)
            .then(msg => console.log(msg))
            .catch(err => console.log(err.message))
    },

    show() {
        Contact.showContact()
            .then(rows => console.log(rows))
            .catch(err => console.log(err.message))
    }
}