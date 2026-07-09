import { Request, Response } from "express";
import { GetEducationsService } from "../services/get-educations.service";

export const getEducations = async (
  _req: Request,
  res: Response
): Promise<void> => {
  const educations =
    await GetEducationsService.execute();

  res.json({
    success: true,
    data: educations,
  });
};
