import bcrypt from "bcryptjs";
import User from "../models/user.model";

interface RegisterInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const registerUser = async (
  data: RegisterInput
) => {
  const {
    firstName,
    lastName,
    email,
    password,
  } = data;

  const existingUser = await User.findOne({
    email,
  });

  if (existingUser) {
    throw new Error("EMAIL_EXISTS");
  }

  const hashedPassword = await bcrypt.hash(
    password,
    10
  );

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  return {
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
    status: user.status,
  };
};
