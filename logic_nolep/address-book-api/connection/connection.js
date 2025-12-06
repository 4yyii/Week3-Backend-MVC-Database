const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('address_book.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            phone TEXT NOT NULL,
            email TEXT
        );        
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS groups (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL      
        );
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS contact_group (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            contact_id INTEGER,
            group_id INTEGER,
            FOREIGN KEY (contact_id) REFERENCES contacts(id),
            FOREIGN KEY (group_id) REFERENCES groups(id)
        );
    `);
})

module.exports = db;