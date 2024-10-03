"use client";
import React from "react";
import { SeatMap } from "./components/SeatMap";
import { Row } from "./interfaces/seat.interface";
import { useBookingStore } from "../shared/store/BookingStore";
import { useRedirectIfNotSelected } from "../shared/hooks/redirect";

const seatMap: Row[] = [
  {
    row: "A",
    seats: [
      { number: 1, reserved: false },
      { number: 2, reserved: true },
      { number: 3, reserved: false },
      { number: 4, reserved: false },
      { number: 5, reserved: true },
    ],
  },
  {
    row: "B",
    seats: [
      { number: 6, reserved: false },
      { number: 7, reserved: false },
      { number: 8, reserved: true },
      { number: 9, reserved: false },
      { number: 10, reserved: false },
    ],
  },
  {
    row: "C",
    seats: [
      { number: 11, reserved: false },
      { number: 12, reserved: false },
      { number: 13, reserved: true },
      { number: 14, reserved: false },
      { number: 15, reserved: true },
    ],
  },
  {
    row: "D",
    seats: [
      { number: 16, reserved: true },
      { number: 17, reserved: false },
      { number: 18, reserved: false },
      { number: 19, reserved: false },
      { number: 20, reserved: true },
    ],
  },
  {
    row: "E",
    seats: [
      { number: 21, reserved: false },
      { number: 22, reserved: true },
      { number: 23, reserved: false },
      { number: 24, reserved: false },
      { number: 25, reserved: false },
    ],
  },
];

export const SeatContainer = () => {
  const selectTrip = useBookingStore((state) => state.selectedBooking);
  const { isValid } = useRedirectIfNotSelected();
  if (!isValid) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Mapa de Asientos de Aerolínea
      </h1>
      <SeatMap
        seatMap={seatMap}
        maxSelectableSeats={selectTrip?.quantity || 0}
      />
    </div>
  );
};
