import { Request, Response } from "express";
import { CreateTestimonialService } from "../services/create-testimonial.service";

export const createTestimonial = async (
  req: Request,
  res: Response
): Promise<void> => {
  const testimonial =
    await CreateTestimonialService.execute(req.body);

  res.status(201).json({
    success: true,
    data: testimonial,
  });
};
