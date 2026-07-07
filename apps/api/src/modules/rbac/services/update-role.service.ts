import Role from "../models/role.model";

export class UpdateRoleService {
  static async execute(
    id: string,
    data: Record<
      string,
      unknown
    >
  ) {
    const role =
      await Role.findByIdAndUpdate(
        id,
        data,
        {
          new: true,
        }
      );

    if (!role) {
      throw new Error(
        "Role not found"
      );
    }

    return role;
  }
}
