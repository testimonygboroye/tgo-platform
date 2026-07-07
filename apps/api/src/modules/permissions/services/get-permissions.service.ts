import Permission from "../models/permission.model";

import { Permission as PermissionType } from "../types/permission.types";

export class GetPermissionsService {
  static execute(): PermissionType[] {
    return [...Permission];
  }
}
