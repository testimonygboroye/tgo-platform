import mongoose, { Schema } from "mongoose";

const TestimonialSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      default: "",
    },

    position: {
      type: String,
      default: "",
    },

    message: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      default: "",
    },

    rating: {
      type: Number,
      default: 5,
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
  "Testimonial",
  TestimonialSchema
);
