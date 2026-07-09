import Project from "../models/project.model";

export class CreateProjectService {
  static async execute(data: any) {
    return Project.create(data);
  }
}
