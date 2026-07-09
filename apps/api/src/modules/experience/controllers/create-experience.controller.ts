import { Request, Response } from "express";
import { CreateExperienceService } from "../services/create-experience.service";

export const createExperience = async (
  req: Request,
  res: Response
): Promise<void> => {
  const experience =
    await CreateExperienceService.execute(req.body);

  res.status(201).json({
    success: true,
    data: experience,
  });
};
