import {
  Response,
  NextFunction,
} from "express";

import { AuthRequest } from "../../auth/middlewares/auth.middleware";

import {
  errorResponse,
} from "../../../shared/utils/apiResponse";

export const authorize =
  (...permissions: string[]) =>
  (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ): void => {
    if (!req.user) {
      errorResponse(
        res,
        "Unauthorized",
        401
      );
      return;
    }

    if (
      req.user.permissions.includes("*")
    ) {
      next();
      return;
    }

    const allowed =
      permissions.every(permission =>
        req.user!.permissions.includes(permission)
      );

    if (!allowed) {
      errorResponse(
        res,
        "Forbidden",
        403
      );
      return;
    }

    next();
  };
