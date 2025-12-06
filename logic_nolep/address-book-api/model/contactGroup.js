const db = require('../connection/connection');

class contactGroup {
    static create(data, callback) {
        db.run(
            `INSERT INTO contact_group (contact_id, group_id) VALUES (?, ?)`,
            [data.contact_id, data.group_id],
            callback   
        );
    }

    static update(id, data, callback) {
        db.run(
            `UPDATE contact_group SET contact_id = ?, group_id = ? WHERE id = ?`,
            [data.contact_id, data.group_id, id],
            callback
        );
    }

    static delete(id, callback) {
        db.run(
            `DELETE FROM contact_group WHERE id = ?`, [id], callback
        )
    }
}

module.exports = contactGroup;