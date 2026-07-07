import Role from "../models/role.model";

export class DeleteRoleService {
  static async execute(
    id: string
  ) {
    const role =
      await Role.findById(id);

    if (!role) {
      throw new Error(
        "Role not found"
      );
    }

    if (role.protected) {
      throw new Error(
        "Protected role cannot be deleted"
      );
    }

    await role.deleteOne();
  }
}
