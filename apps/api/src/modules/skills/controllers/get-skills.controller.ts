import { Request, Response } from "express";
import { GetSkillsService } from "../services/get-skills.service";

export const getSkills = async (
  _req: Request,
  res: Response
): Promise<void> => {
  const skills =
    await GetSkillsService.execute();

  res.json({
    success: true,
    data: skills,
  });
};
