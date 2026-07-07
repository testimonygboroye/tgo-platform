import { z } from "zod";

export const createRoleSchema = z.object({
  id: z.string().min(2),

  name: z.string().min(2),

  description: z.string(),

  permissions: z.array(
    z.string()
  ),

  protected: z.boolean(),
});
