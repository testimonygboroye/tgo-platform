import { Request, Response } from "express";

import { AssignPermissionService } from "../services/assign-permission.service";

import {
  successResponse,
  errorResponse,
} from "../../../shared/utils/apiResponse";

export const assignPermission = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { roleId, permissionId } =
      req.body;

    await AssignPermissionService.execute(
      roleId,
      permissionId
    );

    successResponse(
      res,
      "Permission assigned successfully",
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
