import { Request, Response, NextFunction } from "express";
import { CheckPermissionService } from "../services/check-permission.service";

export const requirePermission =
  (...permissions: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = (req as any).user?.userId;

      if (!userId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const allowed = await CheckPermissionService.execute(
        userId,
        permissions
      );

      if (!allowed) {
        return res.status(403).json({
          success: false,
          message: "Forbidden: insufficient permissions",
        });
      }

      next();
    } catch (error) {
      next(error);
    }
  };
