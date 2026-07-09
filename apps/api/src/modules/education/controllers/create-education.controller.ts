import { Request, Response } from "express";
import { CreateEducationService } from "../services/create-education.service";

export const createEducation = async (
  req: Request,
  res: Response
): Promise<void> => {
  const education =
    await CreateEducationService.execute(req.body);

  res.status(201).json({
    success: true,
    data: education,
  });
};
