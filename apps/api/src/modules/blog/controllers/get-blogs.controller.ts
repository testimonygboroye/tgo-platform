import { Request, Response } from "express";
import { GetBlogsService } from "../services/get-blogs.service";

export const getBlogs = async (
  _req: Request,
  res: Response
): Promise<void> => {
  const blogs =
    await GetBlogsService.execute();

  res.json({
    success: true,
    data: blogs,
  });
};
