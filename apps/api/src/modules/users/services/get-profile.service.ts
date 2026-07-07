import User from "../models/user.model";

import { UserProfile } from "../types/user.types";

export class GetProfileService {
  static async execute(
    userId: string
  ): Promise<UserProfile> {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

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
