import { Router } from "express";

import { getBlogs } from "../controllers/get-blogs.controller";
import { createBlog } from "../controllers/create-blog.controller";

const router = Router();

router.get("/", getBlogs);

router.post("/", createBlog);

export default router;
