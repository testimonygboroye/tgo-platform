import { Request, Response } from "express";

import { CreateRoleService } from "../services/create-role.service";

import {
  successResponse,
  errorResponse,
} from "../../../shared/utils/apiResponse";

export const createRole = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const role =
      await CreateRoleService.execute(
        req.body
      );

    successResponse(
      res,
      "Role created successfully",
      role
    );
  } catch (error) {
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
