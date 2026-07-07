import { Schema } from "mongoose";

export const baseSchemaFields = {
  createdBy: {
    type: String,
    default: null,
  },

  updatedBy: {
    type: String,
    default: null,
  },

  status: {
    type: String,
    enum: ["active", "inactive", "draft", "archived"],
    default: "active",
  },

  deletedAt: {
    type: Date,
    default: null,
  },

  version: {
    type: Number,
    default: 1,
  },

  activityHistory: [
    {
      action: String,
      performedBy: String,
      timestamp: {
        type: Date,
        default: Date.now,
      },
      details: String,
    },
  ],
};

export const baseSchemaOptions = {
  timestamps: true,
};
