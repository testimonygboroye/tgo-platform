import mongoose, { Schema } from "mongoose";

const AuditLogSchema = new Schema(
  {
    userId: {
      type: String,
      default: null,
    },

    action: {
      type: String,
      required: true,
    },

    method: {
      type: String,
      required: true,
    },

    path: {
      type: String,
      required: true,
    },

    ip: { type: String, default: null,
    },
    userAgent: { type: String, default: 
      null,
    },
    statusCode: { type: Number, default: 
      200,
    },
  },
  { timestamps: true,
  }
); export default mongoose.model( 
  "AuditLog", AuditLogSchema
);
