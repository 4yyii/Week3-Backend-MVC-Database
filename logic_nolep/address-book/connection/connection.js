const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("db/address_book.db");

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS Contact (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            phoneNumber TEXT UNIQUE,
            company TEXT NOT NULL,
            email TEXT UNIQUE
        );    
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS Groups (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            groupName TEXT NOT NULL
        );  
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS ContactGroups (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ContactId INTEGER,
            GroupId INTEGER,
            FOREIGN KEY (ContactId) REFERENCES Contact(id),
            FOREIGN KEY (GroupId) REFERENCES Groups(id)
        );        
    `);
})

module.exports = db;