import {
  Request,
  Response,
} from "express";

import { GetRolesService } from "../services/get-roles.service";

import {
  successResponse,
} from "../../../shared/utils/apiResponse";

export const getRoles = async (
  _req: Request,
  res: Response
): Promise<void> => {
  const roles =
    await GetRolesService.execute();

  successResponse(
    res,
    "Roles retrieved successfully",
    roles
  );
};
