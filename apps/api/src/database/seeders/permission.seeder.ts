import Permission from "../../modules/rbac/models/permission.model";

import { PERMISSIONS } from "../../modules/permissions/constants/permissions";

export async function seedPermissions() {
  for (const permission of PERMISSIONS) {
    await Permission.updateOne(
      {
        id: permission.id,
      },
      permission,
      {
        upsert: true,
      }
    );
  }
}
