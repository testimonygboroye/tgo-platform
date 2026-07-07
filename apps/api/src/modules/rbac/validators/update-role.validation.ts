import { z } from "zod";

export const updateRoleSchema =
  z.object({
    name: z.string().optional(),

    description:
      z.string().optional(),

    permissions:
      z.array(
        z.string()
      ).optional(),
  });
