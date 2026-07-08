import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { setupSwagger } from "./docs/swagger";

import authRoutes from "./modules/auth/routes/auth.routes";
import userRoutes from "./modules/users/routes/user.routes";
import roleRoutes from "./modules/roles/routes/role.routes";
import permissionRoutes from "./modules/permissions/routes/permission.routes";
import rbacRoutes from "./modules/rbac/routes/rbac.routes";
import { auditLogger } from "./modules/audit/middlewares/audit.middleware";
import analyticsRoutes from "./modules/analytics/routes/analytics.routes";
import { analyticsTracker } from "./modules/analytics/middlewares/analytics.middleware";

const app = express();

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.use(analyticsTracker);

app.use(auditLogger);

app.use("/api/v1/analytics", analyticsRoutes);

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "TGO Platform API is running.",
  });
});

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/roles", roleRoutes);

app.use("/api/v1/permissions", permissionRoutes);

app.use("/api/v1/rbac", rbacRoutes);

setupSwagger(app);

export default app;
