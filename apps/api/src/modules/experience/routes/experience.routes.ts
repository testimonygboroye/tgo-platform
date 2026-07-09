import { Router } from "express";

import { getExperiences } from "../controllers/get-experiences.controller";
import { createExperience } from "../controllers/create-experience.controller";

const router = Router();

router.get("/", getExperiences);

router.post("/", createExperience);

export default router;
