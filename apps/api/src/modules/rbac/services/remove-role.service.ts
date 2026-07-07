import UserRole from "../models/user-role.model";

export class RemoveRoleService {
  static async execute(
    userId: string,
    roleId: string
  ) {
    return await UserRole.deleteOne({
      userId,
      roleId,
    });
  }
}
