import { Router } from "express";

import { authenticate } from "../../auth/middlewares/auth.middleware";

import { requirePermission } from "../../rbac/middlewares/permission.middleware";

import { getPermissions } from "../controllers/get-permissions.controller";

const router = Router();

router.get(
  "/",
  authenticate,
  requirePermission("permissions.read"),
  getPermissions
);

export default router;
