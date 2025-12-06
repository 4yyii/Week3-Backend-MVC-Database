const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../db/database_design.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS Karyawan (
            id_karyawan INTEGER PRIMARY KEY AUTOINCREMENT,
            nama TEXT NOT NULL,
            jabatan TEXT NOT NULL,
            gaji_harian INTEGER NOT NULL
        );    
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS Absensi (
            id_absensi INTEGER PRIMARY KEY AUTOINCREMENT,
            id_karyawan INTEGER NOT NULL,
            tanggal DATE NOT NULL,
            status TEXT CHECK(status IN ('Hadir', 'Izin', 'Sakit')),
            FOREIGN KEY(id_karyawan) REFERENCES Karyawan(id_karyawan) ON DELETE CASCADE
        );  
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS Tugas (
            id_tugas INTEGER PRIMARY KEY AUTOINCREMENT,
            id_karyawan INTEGER NOT NULL,
            nama_tugas TEXT NOT NULL,
            status TEXT DEFAULT 'Belum Selesai',
            FOREIGN KEY (id_karyawan) REFERENCES Karyawan(id_karyawan) ON DELETE CASCADE
        );      
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS Project (
            id_project INTEGER PRIMARY KEY AUTOINCREMENT,
            id_manager INTEGER NOT NULL,
            nama_project TEXT NOT NULL,
            pendapatan_project INTEGER NOT NULL,
            FOREIGN KEY (id_manager) REFERENCES Karyawan(id_karyawan)
        );  
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS Project_Karyawan (
            id_pk INTEGER PRIMARY KEY AUTOINCREMENT,
            id_project INTEGER NOT NULL,
            id_karyawan INTEGER NOT NULL,
            hari_kerja INTEGER NOT NULL,
            FOREIGN KEY (id_project) REFERENCES Project(id_project),
            FOREIGN KEY (id_karyawan) REFERENCES Karyawan(id_karyawan) ON DELETE CASCADE
        ) 
    `)
})

console.log('Table created!');