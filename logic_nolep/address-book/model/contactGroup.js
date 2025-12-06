let db = require('../connection/connection');

class ContactGroups {
    static create(contactId, groupId) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO ContactGroups (ContactId, GroupId) VALUES (?, ?)`
            db.run(query, [contactId, groupId], function (err) {
                if (err) reject(err)
                else resolve({ id: this.lastID })
            })
        })
    }

    static update(id, contactId, groupId) {
        return new Promise((resolve, reject) => {
            const query = `UPDATE ContactGroups SET ContactId = ?, GroupId = ? WHERE id = ?`;
            db.run(query, [contactId, groupId, id], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ message: 'ContactGroup updated' });
                }
            })
        })
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            const query = `DELETE FROM ContactGroups WHERE id = ?`
            db.run(query, [id], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ message: 'ContactGroup deleted' });
                }
            })
        })
    }
}

module.exports = ContactGroups;