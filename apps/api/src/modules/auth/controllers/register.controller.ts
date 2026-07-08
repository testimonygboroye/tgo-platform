import { Request, Response } from "express";

import { RegisterService } from "../services/register.service";
import { registerSchema } from "../validators/register.validation";

import {
  successResponse,
  errorResponse,
} from "../../../shared/utils/apiResponse";

import { RegisterUserDto } from "../types/auth.types";

export const register = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const parsed = registerSchema.parse(req.body);

    const data: RegisterUserDto = {
      firstName: parsed.firstName,
      lastName: parsed.lastName,
      name: parsed.name,
      email: parsed.email,
      password: parsed.password,
    };

    const result =
      await RegisterService.register(data);

    successResponse(
      res,
      "User created successfully",
      result,
      201
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
        400
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
