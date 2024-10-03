"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/modules/shared/components/ui/button";
import { Checkbox } from "@/modules/shared/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { ZPaymentFormSchema } from "../interfaces/payment.interface";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/modules/shared/components/ui/form";
import { CardSection } from "./CardSection";
import { PaymentField } from "./PaymentField";
import { useBookingStore } from "@/modules/shared/store/BookingStore";
import { Booking } from "@/modules/shared/interfaces";

type PaymentFormSchemaType = z.infer<typeof ZPaymentFormSchema>;

export const PaymentForm = () => {
  const selectTrip = useBookingStore(
    (state) => state.selectedBooking,
  ) as Booking;
  const router = useRouter();
  const form = useForm<PaymentFormSchemaType>({
    resolver: zodResolver(ZPaymentFormSchema),
    defaultValues: {
      cardNumber: "",
      name: "",
      validThru: "",
      cvc: "",
      email: "",
      address: "",
      city: "",
      termsAccepted: false,
    },
    mode: "onChange",
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<PaymentFormSchemaType> = (data) => {
    console.log(data);
    router.push("/booking/sucess");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-h-screen bg-gray-100 p-8"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Pagar y confirmar reserva</h1>

          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-3 md:col-span-2 space-y-8">
              <CardSection title="Datos de la tarjeta">
                <div className="mt-8 space-y-6">
                  <PaymentField
                    control={control}
                    name="cardNumber"
                    label="Número de tarjeta"
                    maxLength={19}
                  />
                  <PaymentField control={control} name="name" label="Nombre" />
                  <div className="grid grid-cols-2 gap-4">
                    <PaymentField
                      control={control}
                      name="validThru"
                      label="Válido hasta"
                      placeholder="MM/YY"
                      maxLength={5}
                      format="validThru"
                    />
                    <PaymentField
                      control={control}
                      name="cvc"
                      label="CVC"
                      maxLength={3}
                    />
                  </div>
                </div>
              </CardSection>

              <CardSection title="Datos de facturación">
                <div className="space-y-4">
                  <PaymentField
                    control={control}
                    name="email"
                    label="Correo electrónico"
                    type="email"
                  />
                  <PaymentField
                    control={control}
                    name="address"
                    label="Dirección de residencia"
                  />
                  <PaymentField control={control} name="city" label="Ciudad" />
                </div>
              </CardSection>

              {/* Checkbox de términos */}
              <div className="space-y-2 text-sm">
                <FormField
                  control={control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <FormLabel htmlFor="terms" className="leading-none">
                          He leído y acepto las condiciones del{" "}
                          <a href="#" className="text-blue-600 hover:underline">
                            Contrato de transporte
                          </a>
                          , las restricciones sobre{" "}
                          <a href="#" className="text-blue-600 hover:underline">
                            mercancías peligrosas
                          </a>
                          , y los términos y condiciones de los{" "}
                          <a href="#" className="text-blue-600 hover:underline">
                            servicios adicionales
                          </a>
                          .
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                className="bg-black text-white hover:bg-gray-800"
                disabled={isSubmitting}
              >
                Confirmar y pagar
              </Button>
            </div>

            <CardSection title="Resumen de compra" className="hidden md:block">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Ida</h3>
                  <div className="flex justify-between items-center">
                    <span>
                      {selectTrip.origin} a {selectTrip.destination}
                    </span>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-md">
                      {selectTrip.quantity} pasajero
                    </span>
                  </div>
                </div>
                <div className="pt-6 space-y-4">
                  <div className="flex justify-between">
                    <span>Adulto</span>
                    <span className="font-bold">$250</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tasas e impuestos</span>
                    <span className="font-bold">$55</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tarifa administrativa</span>
                    <span className="font-bold">$10</span>
                  </div>
                </div>
                <div className="border-t pt-4 flex justify-between items-center">
                  <span className="text-xl font-bold">Total</span>
                  <span className="text-2xl font-bold">$315</span>
                </div>
              </div>
            </CardSection>
          </div>
        </div>
      </form>
    </Form>
  );
};
