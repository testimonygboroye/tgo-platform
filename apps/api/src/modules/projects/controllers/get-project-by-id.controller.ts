import { Request, Response } from "express";
import { GetProjectByIdService } from "../services/get-project-by-id.service";

export const getProjectById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  if (!id || Array.isArray(id)) {
    res.status(400).json({
      success: false,
      message: "Invalid project id",
    });
    return;
  }

  const project =
    await GetProjectByIdService.execute(id);

  if (!project) {
    res.status(404).json({
      success: false,
      message: "Project not found",
    });
    return;
  }

  res.json({
    success: true,
    data: project,
  });
};
