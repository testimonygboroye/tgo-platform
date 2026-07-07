import mongoose, {
  Schema,
} from "mongoose";

const RolePermissionSchema =
  new Schema(
    {
      roleId: {
        type: String,
        required: true,
      },

      permissionId: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

RolePermissionSchema.index(
  {
    roleId: 1,
    permissionId: 1,
  },
  {
    unique: true,
  }
);

export default mongoose.model(
  "RolePermission",
  RolePermissionSchema
);
