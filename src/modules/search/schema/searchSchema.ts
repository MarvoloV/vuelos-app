import { z } from "zod";

export const ZFormSearch = z.object({
  origin: z.string(),
  destination: z
    .string({ required_error: "Item ID is required" })
    .min(1, "Item ID must not be empty"),
  date: z.string(),
  quantity: z.string(),
});
