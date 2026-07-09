import { Request, Response } from "express";
import { GetExperiencesService } from "../services/get-experiences.service";

export const getExperiences = async (
  _req: Request,
  res: Response
): Promise<void> => {
  const experiences =
    await GetExperiencesService.execute();

  res.json({
    success: true,
    data: experiences,
  });
};
