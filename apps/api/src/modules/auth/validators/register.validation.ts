import { z } from "zod";

export const registerSchema = z
  .object({
    firstName: z.string().trim().optional(),
    lastName: z.string().trim().optional(),
    name: z.string().trim().optional(),

    email: z.string().email(),

    password: z.string().min(8),
  })
  .transform((data) => {
    if (data.firstName && data.lastName) {
      return data;
    }

    if (data.name) {
      const parts = data.name.trim().split(/\s+/);

      return {
        ...data,
        firstName: parts[0],
        lastName: parts.slice(1).join(" ") || "User",
      };
    }

    return data;
  })
  .refine(
    (data) => !!data.firstName && !!data.lastName,
    {
      message: "First name and last name are required.",
      path: ["firstName"],
    }
  );
