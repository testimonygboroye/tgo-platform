import User from "../../users/models/user.model";

import { Role } from "../types/role.types";

export class UpdateUserRoleService {
  static async execute(
    userId: string,
    role: Role["id"]
  ): Promise<void> {
    const user =
      await User.findById(userId);

    if (!user) {
      throw new Error(
        "User not found"
      );
    }

    user.role = role;

    await user.save();
  }
}
