const Contact = require('../model/contact');

module.exports = {
    getContacts(req, res) {
        Contact.getAll((err, rows) => {
            if (err) return res.status(500).json({ error: err });
            res.json(rows);
        });
    },

    createContact(req, res) {
        Contact.create(req.body, (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: 'Contact created' });
        })
    },

    updateContact(req, res) {
        Contact.update(req.params.id, req.body, (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: 'Contact updated' });
        })
    },

    deleteContact(req, res) {
        Contact.delete(req.params.id, (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: 'Contact deleted' });
        })
    }
}