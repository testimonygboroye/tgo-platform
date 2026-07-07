import mongoose, {
  Schema,
} from "mongoose";

const UserRoleSchema =
  new Schema(
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      roleId: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

UserRoleSchema.index({
  userId: 1,
  roleId: 1,
}, {
  unique: true,
});

export default mongoose.model(
  "UserRole",
  UserRoleSchema
);
