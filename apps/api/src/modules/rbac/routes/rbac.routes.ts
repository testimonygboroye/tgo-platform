import { Router } from "express";

import { authenticate } from "../../auth/middlewares/auth.middleware";

import { requirePermission } from "../middlewares/permission.middleware";

import { createRole } from "../controllers/create-role.controller";
import { getRoles } from "../controllers/get-roles.controller";
import { updateRole } from "../controllers/update-role.controller";
import { deleteRole } from "../controllers/delete-role.controller";

import { assignRole } from "../controllers/assign-role.controller";
import { removeRole } from "../controllers/remove-role.controller";
import { assignPermission } from "../controllers/assign-permission.controller";
import { removePermission } from "../controllers/remove-permission.controller";

const router = Router();

router.get(
  "/roles",
  authenticate,
  requirePermission("roles.read"),
  getRoles
);

router.post(
  "/roles",
  authenticate,
  requirePermission("roles.update"),
  createRole
);

router.patch(
  "/roles/:id",
  authenticate,
  requirePermission("roles.update"),
  updateRole
);

router.delete(
  "/roles/:id",
  authenticate,
  requirePermission("roles.update"),
  deleteRole
);

router.post(
  "/assign-role",
  authenticate,
  requirePermission("roles.update"),
  assignRole
);

router.post(
  "/remove-role",
  authenticate,
  requirePermission("roles.update"),
  removeRole
);

router.post(
  "/assign-permission",
  authenticate,
  requirePermission("permissions.update"),
  assignPermission
);

router.post(
  "/remove-permission",
  authenticate,
  requirePermission("permissions.update"),
  removePermission
);

export default router;
