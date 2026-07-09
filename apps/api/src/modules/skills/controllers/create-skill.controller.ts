import { Request, Response } from "express";
import { CreateSkillService } from "../services/create-skill.service";

export const createSkill = async (
  req: Request,
  res: Response
): Promise<void> => {
  const skill =
    await CreateSkillService.execute(req.body);

  res.status(201).json({
    success: true,
    data: skill,
  });
};
