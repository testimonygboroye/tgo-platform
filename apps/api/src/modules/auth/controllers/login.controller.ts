import { Request, Response } from "express";

import { LoginService } from "../services/login.service";

import { loginSchema } from "../validators/login.validation";

import {
  successResponse,
  errorResponse,
} from "../../../shared/utils/apiResponse";

export const login = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = loginSchema.parse(req.body);

    const result =
      await LoginService.login(data);

    successResponse(
      res,
      "Login successful",
      result
    );
  } catch (error: any) {
    if (error?.issues) {
      errorResponse(
        res,
        "Validation failed",
        422,
        error.issues
      );
      return;
    }

    if (error instanceof Error) {
      errorResponse(
        res,
        error.message,
        401
      );
      return;
    }

    errorResponse(
      res,
      "Internal server error",
      500
    );
  }
};
