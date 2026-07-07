import bcrypt from "bcryptjs";

import User from "../models/user.model";

import {
  LoginUserDto,
  AuthUser,
} from "../types/auth.types";

import { generateAccessToken } from "../utils/jwt";

export class LoginService {
  static async login(
    data: LoginUserDto
  ): Promise<{
    user: AuthUser;
    accessToken: string;
  }> {
    const user = await User.findOne({
      email: data.email,
    });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const passwordMatches =
      await bcrypt.compare(
        data.password,
        user.password
      );

    if (!passwordMatches) {
      throw new Error("Invalid email or password");
    }

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
