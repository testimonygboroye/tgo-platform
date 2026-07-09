import Skill from "../models/skill.model";

export class GetSkillsService {
  static async execute() {
    return Skill.find().sort({
      createdAt: -1,
    });
  }
}
