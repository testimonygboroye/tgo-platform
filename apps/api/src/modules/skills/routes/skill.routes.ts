import { Router } from "express";

import { getSkills } from "../controllers/get-skills.controller";
import { createSkill } from "../controllers/create-skill.controller";

const router = Router();

router.get("/", getSkills);

router.post("/", createSkill);

export default router;
