import { Router } from "express";

import { authenticate } from "../../auth/middlewares/auth.middleware";

import { requirePermission } from "../../rbac/middlewares/permission.middleware";

import { getRoles } from "../controllers/get-roles.controller";

import { updateUserRole } from "../controllers/update-user-role.controller";

const router = Router();

router.get(
  "/",
  authenticate,
  requirePermission("roles.read"),
  getRoles
);

router.patch(
  "/users/:userId",
  authenticate,
  requirePermission("roles.update"),
  updateUserRole
);

export default router;
