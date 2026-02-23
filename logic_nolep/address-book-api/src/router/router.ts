import { Router } from "express";
import { ContactController } from "../controllers/contactController.js";
import { GroupController } from "../controllers/groupController.js";
import { ContactGroupController } from "../controllers/contactGroupController.js";

const router = Router();

router.get('/contacts', ContactController.getAllContacts);
router.post('/contacts', ContactController.addContact);
router.put('/contacts/:id', ContactController.updateContact);
router.delete('/contacts/:id', ContactController.deleteContact);

router.get('/groups', GroupController.getAllGroups);
router.post('/groups', GroupController.addGroup);
router.put('/groups/:id', GroupController.updateGroup);
router.delete('/groups/:id', GroupController.deleteGroup);

router.post('/contact-groups', ContactGroupController.addContactGroup);
router.put('/contact-groups/:id', ContactGroupController.updateContactGroup);
router.delete('/contact-groups/:id', ContactGroupController.deleteContactGroup);

export default router;