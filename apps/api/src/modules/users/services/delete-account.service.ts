import User from "../models/user.model";

export class DeleteAccountService {
  static async execute(
    userId: string
  ): Promise<void> {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    await user.deleteOne();
  }
}
