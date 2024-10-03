"use client";
import React from "react";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { Input } from "@/modules/shared/components/ui/input";
import { Card } from "@/modules/shared/components/ui/card";
import { Button } from "@/modules/shared/components/ui/button";
import { useTravelSearchParams } from "@/modules/search/hooks/useSearchParamsTravel";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/modules/shared/components/ui/form";
import { ZFormBooking } from "../schema/bookingSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBookingStore } from "@/modules/shared/store/BookingStore";
import { useRouter } from "next/navigation";

export const FormPassenger = () => {
  const { quantity } = useTravelSearchParams();
  const { updateBookingDetails } = useBookingStore();
  const router = useRouter();
  const defaultPassengers = Array(Number(quantity || 1)).fill({
    name: "",
    lastname: "",
  });

  type FormSchemaType = z.infer<typeof ZFormBooking>;
  const form = useForm<z.infer<typeof ZFormBooking>>({
    resolver: zodResolver(ZFormBooking),
    defaultValues: {
      passengers: defaultPassengers,
    },
  });
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;
  const { fields } = useFieldArray({
    control,
    name: "passengers",
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    updateBookingDetails(data);
    router.push("/booking/seatmap");
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields?.map((field, index) => (
          <Card key={field.id} className="space-y-4 my-10 bg-white  px-4 py-8">
            <h3 className="text-lg font-semibold">
              Adulto {index + 1}: {field.name} {field.lastname}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={control}
                name={`passengers.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombres(s):</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} disabled={isSubmitting} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name={`passengers.${index}.lastname`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellido(s):</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} disabled={isSubmitting} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Card>
        ))}

        <div className="flex justify-end">
          <Button className="bg-black text-white hover:bg-gray-800">
            Continuar
          </Button>
        </div>
      </form>
    </Form>
  );
};
