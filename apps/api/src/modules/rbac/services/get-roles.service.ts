import Role from "../models/role.model";

export class GetRolesService {
  static async execute() {
    return await Role.find().sort({
      createdAt: -1,
    });
  }
}
