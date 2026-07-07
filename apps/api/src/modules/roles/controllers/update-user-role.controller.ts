import { Request, Response } from "express";

import { UpdateUserRoleService } from "../services/update-user-role.service";

import { updateUserRoleSchema } from "../validators/update-user-role.validation";

import {
  successResponse,
  errorResponse,
} from "../../../shared/utils/apiResponse";

export const updateUserRole = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.userId;

    if (!userId || Array.isArray(userId)) {
      errorResponse(
        res,
        "User ID is required",
        400
      );
      return;
    }

    const { role } =
      updateUserRoleSchema.parse(req.body);

    await UpdateUserRoleService.execute(
      userId,
      role
    );

    successResponse(
      res,
      "User role updated successfully",
      null
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
        404
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
