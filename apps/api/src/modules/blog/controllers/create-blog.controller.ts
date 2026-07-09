import { Request, Response } from "express";
import { CreateBlogService } from "../services/create-blog.service";

export const createBlog = async (
  req: Request,
  res: Response
): Promise<void> => {
  const blog =
    await CreateBlogService.execute(req.body);

  res.status(201).json({
    success: true,
    data: blog,
  });
};
