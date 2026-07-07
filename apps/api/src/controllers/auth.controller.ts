import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import User from "../models/user.model";
import {
  successResponse,
  errorResponse,
} from "../utils/apiResponse";

export const register = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
    } = req.body;

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return errorResponse(
  res,
  "Email already exists",
  400
);
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const responseData = {
  id: user._id,
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
  role: user.role,
  status: user.status,
};

return successResponse(
  res,
  "User created successfully",
  responseData,
  201
);
  } catch (error) {
    console.error(error);

    return errorResponse(
  res,
  "Internal server error",
  500
);
  }
};
