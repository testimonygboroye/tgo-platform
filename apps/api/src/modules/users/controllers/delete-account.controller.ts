import { Response } from "express";

import { AuthRequest } from "../../auth/middlewares/auth.middleware";

import { DeleteAccountService } from "../services/delete-account.service";

import {
  successResponse,
  errorResponse,
} from "../../../shared/utils/apiResponse";

export const deleteAccount = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    await DeleteAccountService.execute(
      req.user!.userId
    );

    successResponse(
      res,
      "Account deleted successfully",
      null
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
