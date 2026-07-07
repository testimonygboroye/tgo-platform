import { Router } from "express";
import { register } from "../controllers/register.controller";
import { login } from "../controllers/login.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);

// protected test route
router.get("/me", authenticate, (req, res) => {
  res.json({
    success: true,
    message: "Authenticated user",
    data: (req as any).user,
  });
});

export default router;
