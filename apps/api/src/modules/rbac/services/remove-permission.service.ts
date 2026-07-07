import RolePermission from "../models/role-permission.model";

export class RemovePermissionService {
  static async execute(
    roleId: string,
    permissionId: string
  ) {
    return await RolePermission.deleteOne({
      roleId,
      permissionId,
    });
  }
}
