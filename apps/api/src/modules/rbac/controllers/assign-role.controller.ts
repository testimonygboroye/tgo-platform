import { Request, Response } from "express";

import { AssignRoleService } from "../services/assign-role.service";

import {
  successResponse,
  errorResponse,
} from "../../../shared/utils/apiResponse";

export const assignRole = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, roleId } = req.body;

    await AssignRoleService.execute(
      userId,
      roleId
    );

    successResponse(
      res,
      "Role assigned successfully",
      null
    );
  } catch (error) {
    if (error instanceof Error) {
      errorResponse(
        res,
        error.message,
        400
      ); return;
    }
    errorResponse(
  res,
  "Internal server error",
  500
);
  }
};
