import { Response } from "express";

import { GetProfileService } from "../services/get-profile.service";

import { AuthRequest } from "../../auth/middlewares/auth.middleware";

import {
  successResponse,
  errorResponse,
} from "../../../shared/utils/apiResponse";

export const getProfile = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const result =
      await GetProfileService.execute(
        req.user!.userId
      );

    successResponse(
      res,
      "Profile retrieved successfully",
      result
    );
  } catch (error) {
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
