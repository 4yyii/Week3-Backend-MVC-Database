import { GroupContactModel } from "../models/contactGroup.js";
import { Request, Response } from "express";

export class ContactGroupController {
    static async addContactGroup(req: Request, res: Response) {
        try {
            const { ContactId, GroupId } = req.body;
            const newContactGroup = await GroupContactModel.create(ContactId, GroupId);
            res.status(201).json(newContactGroup);
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }   

    static async updateContactGroup(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { ContactId, GroupId } = req.body;
            const updated = await GroupContactModel.update(Number(id), ContactId, GroupId);
            if (!updated) {
                return res.status(404).json({ message: `GroupContact with ID ${id} not found` })
            } else {
                res.status(200).json(updated);
            }
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async deleteContactGroup(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deleted = await GroupContactModel.delete(Number(id));
            if (!deleted) {
                return res.status(404).json({ message: `GroupContact with ID ${id} not found` });
            } else {
                res.status(200).json(deleted);
            }
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}