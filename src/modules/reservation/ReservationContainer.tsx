"use client";
import React from "react";
import {
  CardContent,
  CardHeader,
  CardTitle,
} from "../shared/components/ui/card";
import { HeaderResult } from "../search/components";
import { FormPassenger } from "./components/FormPassenger";
import { useRedirectIfNotSelected } from "../shared/hooks/redirect";

export const ReservationContainer = () => {
  const { isValid } = useRedirectIfNotSelected();
  if (!isValid) {
    return <div>Cargando...</div>;
  }
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <HeaderResult />
        <div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
            <CardTitle className="text-2xl font-bold">Pasajeros</CardTitle>
          </CardHeader>
          <CardContent className="p-0 pt-2">
            <p className="text-sm text-gray-500 mb-4">
              Ingresa el nombre(s) y apellido(s) de cada pasajero tal y como
              aparecen en el pasaporte o documento de identidad.
            </p>
          </CardContent>
        </div>

        <FormPassenger />
      </div>
    </div>
  );
};
