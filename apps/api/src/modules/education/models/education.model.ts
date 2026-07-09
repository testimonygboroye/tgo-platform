import mongoose, { Schema } from "mongoose";

const EducationSchema = new Schema(
  {
    institution: {
      type: String,
      required: true,
    },

    degree: {
      type: String,
      required: true,
    },

    field: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    startDate: {
      type: String,
      default: "",
    },

    endDate: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Education",
  EducationSchema
);
