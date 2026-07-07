import {
  Request,
  Response,
  NextFunction,
} from "express";

import { verifyAccessToken } from "../utils/jwt";

import { CheckPermissionService } from "../../rbac/services/check-permission.service";

import {
  errorResponse,
} from "../../../shared/utils/apiResponse";

export interface AuthRequest
  extends Request {
  user?: {
    userId: string;
    email: string;
    role: string;
    permissions: string[];
  };
}

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  const header =
    req.headers.authorization;

  if (!header?.startsWith("Bearer ")) {
    errorResponse(
      res,
      "Unauthorized",
      401
    );
    return;
  }

  const token =
  header.split(" ")[1];

if (!token) {
  errorResponse(
    res,
    "Unauthorized",
    401
  );
  return;
}

  try {
    const decoded =
      verifyAccessToken(token);

    req.user = {
      ...decoded,
      permissions: [],
    };

    next();
  } catch {
    errorResponse(
      res,
      "Invalid or expired token",
      401
    );
  }
};
