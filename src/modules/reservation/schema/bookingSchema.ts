import { z } from "zod";

export const ZFormBooking = z.object({
  passengers: z.array(
    z.object({
      name: z.string().min(4, "El nombre no puede estar en blanco"),
      lastname: z.string().min(4, "El apellido no puede estar en blanco"),
    }),
  ),
});
