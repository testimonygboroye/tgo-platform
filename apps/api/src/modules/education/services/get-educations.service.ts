import Education from "../models/education.model";

export class GetEducationsService {
  static async execute() {
    return Education.find().sort({
      createdAt: -1,
    });
  }
}
