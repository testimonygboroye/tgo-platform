import { Request, Response } from "express";
import { GetTestimonialsService } from "../services/get-testimonials.service";

export const getTestimonials = async (
  _req: Request,
  res: Response
): Promise<void> => {
  const testimonials =
    await GetTestimonialsService.execute();

  res.json({
    success: true,
    data: testimonials,
  });
};
