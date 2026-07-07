import Role from "../models/role.model";

import { Role as RoleType } from "../types/rbac.types";

export class CreateRoleService {
  static async execute(
    data: Omit<
      RoleType,
      "createdAt" | "updatedAt"
    >
  ) {
    const exists =
      await Role.findOne({
        id: data.id,
      });

    if (exists) {
      throw new Error(
        "Role already exists"
      );
    }

    return await Role.create(data);
  }
}
