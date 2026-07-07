import mongoose, { Schema, Document } from "mongoose";
import { baseSchemaFields } from "../../../shared/models/base.schema";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
    },

    role: {
      type: String,
      default: "user",
    },

    ...baseSchemaFields,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUser>(
  "User",
  UserSchema
);
