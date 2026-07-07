import { Request } from "express";

export const getParamId = (
  req: Request
): string | null => {
  const id = req.params.id;

  if (!id) {
    return null;
  }

  if (Array.isArray(id)) {
    return id[0] ?? null;
  }

  return id;
};
