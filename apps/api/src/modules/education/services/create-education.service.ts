import Education from "../models/education.model";

export class CreateEducationService {
  static async execute(data: any) {
    return Education.create(data);
  }
}
