import Project from "../models/project.model";

export class GetProjectByIdService {
  static async execute(id: string) {
    return Project.findById(id);
  }
}
