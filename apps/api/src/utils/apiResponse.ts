import { Response } from "express";

export const successResponse = (
  res: Response,
  message: string,
  data: unknown = null,
  statusCode = 200
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    timestamp: new Date().toISOString(),
  });
};

export const errorResponse = (
  res: Response,
  message: string,
  statusCode = 500,
  errors: unknown = null
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
    timestamp: new Date().toISOString(),
  });
};
