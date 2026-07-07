import bcrypt from "bcryptjs";

import User from "../models/user.model";

import {
  RegisterUserDto,
  AuthUser,
} from "../types/auth.types";

import { generateAccessToken } from "../utils/jwt";

export class RegisterService {
  static async register(
    data: RegisterUserDto
  ): Promise<{
    user: AuthUser;
    accessToken: string;
  }> {
    const existingUser = await User.findOne({
      email: data.email,
    });

    if (existingUser) {
      throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(
      data.password,
      10
    );

    const user = await User.create({
      ...data,
      password: hashedPassword,
    });

    const accessToken = generateAccessToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    return {
      user: {
        id: user._id.toString(),
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        status: user.status,
      },
      accessToken,
    };
  }
}
