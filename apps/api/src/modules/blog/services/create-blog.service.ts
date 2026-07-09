import Blog from "../models/blog.model";

export class CreateBlogService {
  static async execute(data: any) {
    return Blog.create(data);
  }
}
