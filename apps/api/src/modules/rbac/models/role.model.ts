import mongoose, {
  Schema,
} from "mongoose";

const RoleSchema = new Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    permissions: {
      type: [String],
      default: [],
    },

    protected: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Role",
  RoleSchema
);
