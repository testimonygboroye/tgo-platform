import { Request, Response } from "express";
import { CreateProjectService } from "../services/create-project.service";

export const createProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  const project =
    await CreateProjectService.execute(req.body);

  res.status(201).json({
    success: true,
    data: project,
  });
};
