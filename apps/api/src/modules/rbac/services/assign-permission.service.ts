import RolePermission from "../models/role-permission.model";

export class AssignPermissionService {
  static async execute(
    roleId: string,
    permissionId: string
  ) {
    return await RolePermission.updateOne(
      {
        roleId,
        permissionId,
      },
      {
        roleId,
        permissionId,
      },
      {
        upsert: true,
      }
    );
  }
}
