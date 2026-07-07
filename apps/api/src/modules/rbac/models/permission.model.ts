import mongoose, {
  Schema,
} from "mongoose";

const PermissionSchema =
  new Schema(
    {
      id: {
        type: String,
        unique: true,
        required: true,
      },

      name: {
        type: String,
        required: true,
      },

      description: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Permission",
  PermissionSchema
);
