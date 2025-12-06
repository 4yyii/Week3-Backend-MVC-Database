const Group = require('../model/group');

module.exports = {
    getGroups(req, res) {
        Group.getAll((err, rows) => {
            if (err) return res.status(500).json({ error: err });
            res.json(rows);
        });
    },

    createGroups(req, res) {
        Group.create(req.body, (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: 'Group created' });
        });
    },

    updateGroups(req, res) {
        Group.update(req.params.id, req.body, (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: 'Group updated' });
        });
    },

    deleteGroups(req, res) {
        Group.delete(req.params.id, (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: 'Group deleted' });
        });
    }
}