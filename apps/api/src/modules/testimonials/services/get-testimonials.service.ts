import Testimonial from "../models/testimonial.model";

export class GetTestimonialsService {
  static async execute() {
    return Testimonial.find().sort({
      createdAt: -1,
    });
  }
}
