import Testimonial from "../models/testimonial.model";

export class CreateTestimonialService {
  static async execute(data: any) {
    return Testimonial.create(data);
  }
}
