import { Router } from "express";

import { authenticate } from "../../auth/middlewares/auth.middleware";

import { getProfile } from "../controllers/get-profile.controller";
import { updateProfile } from "../controllers/update-profile.controller";
import { deleteAccount } from "../controllers/delete-account.controller";

const router = Router();

/*
|--------------------------------------------------------------------------
| User Routes
|--------------------------------------------------------------------------
*/

router.get(
  "/me",
  authenticate,
  getProfile
);

router.patch(
  "/me",
  authenticate,
  updateProfile
);

router.delete(
  "/me",
  authenticate,
  deleteAccount
);

export default router;
