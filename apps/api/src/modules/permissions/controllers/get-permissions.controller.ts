import { Request, Response } from "express";

import { GetPermissionsService } from "../services/get-permissions.service";

import {
  successResponse,
} from "../../../shared/utils/apiResponse";

export const getPermissions = (
  _req: Request,
  res: Response
): void => {
  const permissions =
    GetPermissionsService.execute();

  successResponse(
    res,
    "Permissions retrieved successfully",
    permissions
  );
};
