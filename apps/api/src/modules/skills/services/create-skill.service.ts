import Skill from "../models/skill.model";

export class CreateSkillService {
  static async execute(data: any) {
    return Skill.create(data);
  }
}
