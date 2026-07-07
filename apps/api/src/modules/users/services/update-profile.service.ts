import User from "../models/user.model";

import {
  UpdateProfileDto,
  UserProfile,
} from "../types/user.types";

export class UpdateProfileService {
  static async execute(
    userId: string,
    data: UpdateProfileDto
  ): Promise<UserProfile> {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    if (data.firstName !== undefined) {
      user.firstName = data.firstName;
    }

    if (data.lastName !== undefined) {
      user.lastName = data.lastName;
    }

    await user.save();

    return {
      id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      status: user.status,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
