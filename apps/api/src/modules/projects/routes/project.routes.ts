import { Router } from "express";

import { getProjects } from "../controllers/get-projects.controller";
import { getProjectById } from "../controllers/get-project-by-id.controller";

const router = Router();

router.get("/", getProjects);

router.get("/:id", getProjectById);

export default router;
