import mongoose, { Schema } from "mongoose";

const AnalyticsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    sessionId: String,

    event: {
      type: String,
      required: true,
    },

    method: String,

    path: String,

    ip: String,

    userAgent: String,

    referrer: String,

    statusCode: Number,

    responseTime: Number,

    country: String,

    city: String,

    device: String,

    browser: String,

    os: String,

    metadata: {
      type: Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Analytics",
  AnalyticsSchema
);
