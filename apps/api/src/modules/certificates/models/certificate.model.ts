import mongoose, { Schema } from "mongoose";

const CertificateSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    issuer: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    issueDate: {
      type: String,
      default: "",
    },

    credentialUrl: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Certificate",
  CertificateSchema
);
