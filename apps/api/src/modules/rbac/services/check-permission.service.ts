import UserRole from "../models/user-role.model";
import Role from "../models/role.model";

export class CheckPermissionService {
  static async execute(
    userId: string,
    requiredPermissions: string[]
  ): Promise<boolean> {
    const userRoles = await UserRole.find({
      userId,
    });

    if (!userRoles.length) {
      return false;
    }

    const roleIds = userRoles.map(
      (role) => role.roleId
    );

    const roles = await Role.find({
      id: {
        $in: roleIds,
      },
    });

    const permissions = new Set<string>();

    for (const role of roles) {
      for (const permission of role.permissions) {
        permissions.add(permission);
      }
    }

    if (permissions.has("*")) {
      return true;
    }

    return requiredPermissions.every(
      (permission) =>
        permissions.has(permission)
    );
  }
}
