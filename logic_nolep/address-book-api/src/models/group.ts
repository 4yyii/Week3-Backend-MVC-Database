import { query } from "../connection/connection.js";

export class GroupsModel {
    static async findAll() {
        const sql = `
            SELECT g.id, g."groupName", array_agg(c.name) AS members  
            FROM "Groups" g
            LEFT JOIN "GroupContact" gc ON gc."GroupId"  = g.id
            LEFT JOIN "Contact" c ON c.id = gc."ContactId"
            GROUP BY g.id;
        `;
        const res = await query(sql);
        return res.rows;
    }

    static async create(groupName: string) {
        const sql = `
            INSERT INTO "Groups" ("groupName")
            VALUES ($1)
            RETURNING *;
        `;
        const res = await query(sql, [groupName]);
        return res.rows[0];
    }

    static async update(id: number, groupName: string) {
        const sql = `
            UPDATE "Groups"
            SET "groupName" = $2
            WHERE id = $1
            RETURNING *;
        `;
        const res = await query(sql, [id, groupName]);
        return res.rows[0];
    }

    static async delete(id: number) {
        const sql = `DELETE FROM "Groups" WHERE id = $1 RETURNING *;`;
        const res = await query(sql, [id]);
        return res.rows[0];
    }
}