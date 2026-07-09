import { Router } from "express";

import { getEducations } from "../controllers/get-educations.controller";
import { createEducation } from "../controllers/create-education.controller";

const router = Router();

router.get("/", getEducations);

router.post("/", createEducation);

export default router;
