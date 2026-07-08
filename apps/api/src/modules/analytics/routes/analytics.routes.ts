import { Router } from "express";

import { authenticate } from "../../auth/middlewares/auth.middleware";
import { requirePermission } from "../../rbac/middlewares/permission.middleware";
import { getDashboardAnalytics } from "../controllers/get-dashboard-analytics.controller";

const router = Router();

router.get(
  "/dashboard",
  authenticate,
  requirePermission("analytics.read"),
  getDashboardAnalytics
);

export default router;
