import Project from "../models/project.model";

export class GetProjectsService {
  static async execute() {
    return Project.find().sort({
      createdAt: -1,
    });
  }
}
