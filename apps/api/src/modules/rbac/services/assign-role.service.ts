import UserRole from "../models/user-role.model";

export class AssignRoleService {
  static async execute(
    userId: string,
    roleId: string
  ) {
    return await UserRole.updateOne(
      {
        userId,
        roleId,
      },
      {
        userId,
        roleId,
      },
      {
        upsert: true,
      }
    );
  }
}
