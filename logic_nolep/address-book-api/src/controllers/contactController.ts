import { ContactModel } from "../models/contact.js";
import { Request, Response } from "express";

export class ContactController {
    static async getAllContacts(req: Request, res: Response) {
        try {
            const data = await ContactModel.findAll();
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async addContact(req: Request, res: Response) {
        try {
            const { name, phone, company, email } = req.body;
            const newContact = await ContactModel.create(name, phone, company, email);
            res.status(201).json(newContact);
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async updateContact(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, phone, company, email } = req.body;
            const updated = await ContactModel.update(Number(id), name, phone, company, email);
            if (!updated) {
                return res.status(404).json({ message: `Contact with ID ${id} not found` })
            } else {
                res.status(200).json(updated);
            }
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async deleteContact(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deleted = await ContactModel.delete(Number(id));
            if (!deleted) {
                return res.status(404).json({ message: `Contact with ID ${id} not found` });
            } else {
                res.status(200).json(deleted);
            }
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}