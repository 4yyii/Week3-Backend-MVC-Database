import { query } from "../connection/connection.js";

export class ContactModel {
    static async findAll() {
        const sql = `
            SELECT c.*, array_agg(g."groupName") as groups
            FROM "Contact" c
            LEFT JOIN "GroupContact" gc ON c.id = gc."ContactId"
            LEFT JOIN "Groups" g ON gc."GroupId" = g.id
            GROUP BY c.id;
        `;
        const res = await query(sql);
        return res.rows;
    }

    static async create(name: string, phone: string, company: string, email: string) {
        const sql = `
            INSERT INTO "Contact" (name, "phoneNumber", company, email)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
        const res = await query(sql, [name, phone, company, email]);
        return res.rows[0];
    }

    static async update(id: number, name: string, phone: string, company: string, email: string) {
        const sql = `
            UPDATE "Contact"
            SET name = $2, "phoneNumber" = $3, company = $4, email = $5
            WHERE id = $1
            RETURNING *;
        `;
        const res = await query(sql, [id, name, phone, company, email]);
        return res.rows[0];
    }

    static async delete(id: number) {
        const sql = `DELETE FROM "Contact" WHERE id = $1 RETURNING *;`;
        const res = await query(sql, [id]);
        return res.rows[0];
    }
}