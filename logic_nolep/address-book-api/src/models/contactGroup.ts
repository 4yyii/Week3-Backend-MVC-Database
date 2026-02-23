import { query } from "../connection/connection.js";

export class GroupContactModel {
    static async create(ContactId: number, GroupId: number) {
        const sql = `
            INSERT INTO "GroupContact" ("ContactId", "GroupId")
            VALUES ($1, $2)
            RETURNING *;
        `;
        const res = await query(sql, [ContactId, GroupId]);
        return res.rows[0];
    }

    static async update(id: number, ContactId: number, GroupId: number) {
        const sql = `
            UPDATE "GroupContact"
            SET "ContactId" = $2, "GroupId" = $3
            WHERE id = $1
            RETURNING *;
        `;
        const res = await query(sql, [id, ContactId, GroupId]);
        return res.rows[0];
    }

    static async delete(id: number) {
        const sql = `DELETE FROM "GroupContact" WHERE id = $1 RETURNING *;`;
        const res = await query(sql, [id]);
        return res.rows[0];
    }
}