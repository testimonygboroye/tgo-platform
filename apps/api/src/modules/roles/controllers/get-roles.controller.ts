import { Request, Response } from "express";

import { GetRolesService } from "../services/get-roles.service";

import {
  successResponse,
} from "../../../shared/utils/apiResponse";

export const getRoles = (
  _req: Request,
  res: Response
): void => {
  const roles =
    GetRolesService.execute();

  successResponse(
    res,
    "Roles retrieved successfully",
    roles
  );
};
