import { GroupsModel } from "../models/group.js";
import { Request, Response } from "express";

export class GroupController {
    static async getAllGroups(req: Request, res: Response) {
        try {
            const data = await GroupsModel.findAll();
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async addGroup(req: Request, res: Response) {
        try {
            const { groupName } = req.body;
            const newGroup = await GroupsModel.create(groupName);
            res.status(201).json(newGroup);
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async updateGroup(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { groupName } = req.body;
            const updated = await GroupsModel.update(Number(id), groupName);
            if (!updated) {
                return res.status(404).json({ message: `Group with ID ${id} not found` });
            } else {
                res.status(200).json(updated);
            }
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async deleteGroup(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deleted = await GroupsModel.delete(Number(id));
            if (!deleted) {
                return res.status(404).json({ message: `Group with ID ${id} not found` });
            } else {
                res.status(200).json(deleted);
            }
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}