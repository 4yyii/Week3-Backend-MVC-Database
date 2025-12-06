let db = require('../connection/connection');

class Groups {
    static create(groupName) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO Groups (groupName) VALUES (?)`;
            db.run(query, [groupName], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id: this.lastID })
                }
            })
        })
    }

    static update(id, groupName) {
        return new Promise((resolve, reject) => {
            const query = `UPDATE Groups SET groupName = ? WHERE id = ?`;
            db.run(query, [groupName, id], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ message: 'Group updated' });
                }
            })
        })
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                const query = `DELETE FROM groups WHERE id = ?`;
                db.run(`DELETE FROM ContactGroups WHERE GroupId = ?`, [id]);
                db.run(query, [id], function (err) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({ message: 'Group deleted (and its relation)' });
                    }
                })
            })
        })
    }

    static showGroups() {
        return new Promise((resolve, reject) => {
            const query = `
                SELECT
                    Groups.id as groupId,
                    Groups.groupName,
                    Contact.name as contactName
                FROM Groups
                LEFT JOIN ContactGroups ON Groups.id = ContactGroups.GroupId
                LEFT JOIN Contact ON Contact.id = ContactGroups.ContactId
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

module.exports = Groups