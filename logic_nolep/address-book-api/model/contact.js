const db = require('../connection/connection');

class Contact {
    static getAll(callback) {
        db.all(`SELECT * FROM contacts`, callback);
    }

    static create(data, callback) {
        db.run(
            `INSERT INTO contacts (name, phone, email) VALUES (?, ?, ?)`,
            [data.name, data.phone, data.email],
            callback
        );
    }

    static update(id, data, callback) {
        db.run(
            `UPDATE contacts SET name = ?, phone = ?, email = ? WHERE id = ?`,
            [data.name, data.phone, data.email, id],
            callback
        )
    };

    static delete(id, callback) {
        db.run(
            `DELETE FROM contacts WHERE ID = ?`, [id], callback
        );  
    };
}

module.exports = Contact;