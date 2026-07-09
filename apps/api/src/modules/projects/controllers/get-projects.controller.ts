import { Request, Response } from "express";
import { GetProjectsService } from "../services/get-projects.service";

export const getProjects = async (
  _req: Request,
  res: Response
): Promise<void> => {
  const projects =
    await GetProjectsService.execute();

  res.json({
    success: true,
    data: projects,
  });
};
