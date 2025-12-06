const ContactGroup = require('../model/contactGroup');

module.exports = {
    createContactGroup(req, res) {
        ContactGroup.create(req.body, (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: 'Contact-group linked' });
        });
    },

    updateContactGroup(req, res) {
        ContactGroup.update(req.params.id, req.body, (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: 'Contact-group updated' });
        });
    },

    deleteContactGroup(req, res) {
        ContactGroup.delete(req.params.id, (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: 'Contact-group deleted' });
        });
    }
}