import jwt from "jsonwebtoken";
import { JwtPayload } from "../types/auth.types";

const JWT_SECRET = process.env.JWT_SECRET || "development_secret";

const ACCESS_TOKEN_EXPIRES = "1d";

export const generateAccessToken = (
  payload: JwtPayload
): string => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES,
  });
};

export const verifyAccessToken = (
  token: string
): JwtPayload => {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
};
