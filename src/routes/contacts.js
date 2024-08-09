import express, { Router } from "express";
import ContactsController from "../controllers/contacts.js";

const router = express.Router();


// GET /Contacts

// POST /Contacts
router.post('/', ContactsController.createContacts);

// GET /Contacts/{userId}
router.get('/', ContactsController.getContacts);

// GET /Contacts/{wppNumber}
router.get('/:wppNumber', ContactsController.getContacts);

// PUT /Contacts/{userId}
router.put('/:wppNumber', ContactsController.changeContacts);

// DELETE /Contacts/{userId}
router.delete('/:userId/:wppNumber', ContactsController.deleteContacts);


export default router;