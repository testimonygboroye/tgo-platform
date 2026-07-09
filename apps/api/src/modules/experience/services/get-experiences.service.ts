import Experience from "../models/experience.model";

export class GetExperiencesService {
  static async execute() {
    return Experience.find().sort({
      createdAt: -1,
    });
  }
}
