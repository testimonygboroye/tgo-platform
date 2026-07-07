import Role from "../models/role.model";

import { Role as RoleType } from "../types/role.types";

export class GetRolesService {
  static execute(): RoleType[] {
    return [...Role];
  }
}
