import { z } from "zod";

export const ZPaymentFormSchema = z.object({
  cardNumber: z
    .string()
    .min(16, "El número de tarjeta debe tener al menos 16 dígitos"),
  name: z.string().nonempty("El nombre es requerido"),
  validThru: z.string().regex(/^\d{2}\/\d{2}$/, "Formato debe ser MM/YY"),
  cvc: z.string().min(3, "CVC debe tener 3 dígitos"),
  email: z.string().email("Correo electrónico inválido"),
  address: z.string().nonempty("Dirección es requerida"),
  city: z.string().nonempty("Ciudad es requerida"),
  termsAccepted: z
    .boolean()
    .refine((v) => v, "Debes aceptar los términos y condiciones"),
});
