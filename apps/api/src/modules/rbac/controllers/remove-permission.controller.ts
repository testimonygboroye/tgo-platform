import { Request, Response } from "express";

import { RemovePermissionService } from "../services/remove-permission.service";

import {
  successResponse,
  errorResponse,
} from "../../../shared/utils/apiResponse";

export const removePermission = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { roleId, permissionId } =
      req.body;

    await RemovePermissionService.execute(
      roleId,
      permissionId
    );

    successResponse(
      res,
      "Permission removed successfully",
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
