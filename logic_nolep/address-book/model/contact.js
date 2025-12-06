let db = require('../connection/connection');

class Contact {
    static create(name, phoneNumber, company, email) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO Contact (name, phoneNumber, company, email) VALUES (?, ?, ?, ?)`;
            db.run(query, [name, phoneNumber, company, email], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id: this.lastID });
                }
            });
        });
    }

    static update(id, name, phoneNumber, company, email) {
        return new Promise((resolve, reject) => {
            const query = `UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?`;
            db.run(query, [name, phoneNumber, company, email, id], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ message: 'Contact updated' });
                }
            });
        });
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            const query = `DELETE FROM Contact WHERE id = ?`;
            db.run(query, [id], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ message: 'Contact deleted' });
                }
            });
        });
    }

    static showContact() {
        return new Promise((resolve, reject) => {
            const query = `
                SELECT
                    Contact.id as contactId,
                    Contact.name,
                    Contact.phoneNumber,
                    Contact.company,
                    Contact.email,
                    Groups.groupName
                FROM Contact
                LEFT JOIN ContactGroups ON Contact.id = ContactGroups.ContactId
                LEFT JOIN Groups ON Groups.id = ContactGroups.GroupId
            `;
            db.all(query, function (err, rows) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            })
        })
    }
}

module.exports = Contact;