import mongoose, { Schema } from "mongoose";

const SkillSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      default: "general",
    },

    level: {
      type: String,
      default: "intermediate",
    },

    icon: {
      type: String,
      default: "",
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Skill",
  SkillSchema
);
