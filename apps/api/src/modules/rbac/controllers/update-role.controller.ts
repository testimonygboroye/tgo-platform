import { Request, Response } from "express";

import { UpdateRoleService } from "../services/update-role.service";

import {
  successResponse,
  errorResponse,
} from "../../../shared/utils/apiResponse";

export const updateRole = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const roleId = Array.isArray(req.params.id)
  ? req.params.id[0]
  : req.params.id;

    if (!roleId) {
      errorResponse(res, "Role ID is required", 400);
      return;
    }

    const role = await UpdateRoleService.execute(
      roleId,
      req.body
    );

    successResponse(
      res,
      "Role updated successfully",
      role
    );
  } catch (error) {
    if (error instanceof Error) {
      errorResponse(res, error.message, 404);
      return;
    }

    errorResponse(res, "Internal server error", 500);
  }
};
