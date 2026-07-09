import mongoose, { Schema } from "mongoose";

const ContactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    subject: {
      type: String,
      default: "",
    },

    message: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "unread",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Contact",
  ContactSchema
);
