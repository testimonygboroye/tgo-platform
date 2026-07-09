import { Router } from "express";

import { getContacts } from "../controllers/get-contacts.controller";
import { createContact } from "../controllers/create-contact.controller";

const router = Router();

router.get("/", getContacts);

router.post("/", createContact);

export default router;
