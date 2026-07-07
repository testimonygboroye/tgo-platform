import { Request, Response } from "express";

import { RemoveRoleService } from "../services/remove-role.service";

import {
  successResponse,
  errorResponse,
} from "../../../shared/utils/apiResponse";

export const removeRole = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, roleId } = req.body;

    await RemoveRoleService.execute(
      userId,
      roleId
    );

    successResponse(
      res,
      "Role removed successfully",
      null
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

