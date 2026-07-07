import { Response } from "express";

import { AuthRequest } from "../../auth/middlewares/auth.middleware";

import { UpdateProfileService } from "../services/update-profile.service";

import { updateProfileSchema } from "../validators/update-profile.validation";

import {
  successResponse,
  errorResponse,
} from "../../../shared/utils/apiResponse";

export const updateProfile = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const data =
      updateProfileSchema.parse(req.body);

    const result =
      await UpdateProfileService.execute(
        req.user!.userId,
        data
      );

    successResponse(
      res,
      "Profile updated successfully",
      result
    );
  } catch (error: any) {
    if (error?.issues) {
      errorResponse(
        res,
        "Validation failed",
        422,
        error.issues
      );
      return;
    }

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
