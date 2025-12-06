const db = require('../connection/connection');

class Group {
    static getAll(callback) {
        db.all(
            `SELECT * FROM groups`, callback
        );
    }

    static create(data, callback) {
        db.run(
            `INSERT INTO groups (name) VALUES (?)`,
            [data.name],
            callback   
        );
    }

    static update(id, data, callback) {
        db.run(
            `UPDATE groups SET name = ? WHERE id = ?`,
            [data.name, id],
            callback
        );
    }

    static delete(id, callback) {
        db.run(
            `DELETE FROM groups WHERE id = ?`, [id], callback
        );
    }
}

module.exports = Group;