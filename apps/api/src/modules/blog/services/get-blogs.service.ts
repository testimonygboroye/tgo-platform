import Blog from "../models/blog.model";

export class GetBlogsService {
  static async execute() {
    return Blog.find().sort({
      createdAt: -1,
    });
  }
}
