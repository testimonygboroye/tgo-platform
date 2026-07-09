import Experience from "../models/experience.model";

export class CreateExperienceService {
  static async execute(data: any) {
    return Experience.create(data);
  }
}
