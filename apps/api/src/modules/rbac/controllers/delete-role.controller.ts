import { Request, Response } from "express";

import { DeleteRoleService } from "../services/delete-role.service";

import {
  successResponse,
  errorResponse,
} from "../../../shared/utils/apiResponse";

export const deleteRole = async (
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

    await DeleteRoleService.execute(roleId);

    successResponse(res, "Role deleted successfully", null);
  } catch (error) {
    if (error instanceof Error) {
      errorResponse(res, error.message, 404);
      return;
    }

    errorResponse(res, "Internal server error", 500);
  }
};
