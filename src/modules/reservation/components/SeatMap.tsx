"use client";

import React, { useState } from "react";
import { Seat } from "./Seat";
import { ISeat, Row } from "../interfaces/seat.interface";
import { useBookingStore } from "@/modules/shared/store/BookingStore";
import { Button } from "@/modules/shared/components/ui/button";
import { useRouter } from "next/navigation";

interface SeatMapProps {
  seatMap: Row[];
  maxSelectableSeats: number;
}

export const SeatMap: React.FC<SeatMapProps> = ({
  seatMap,
  maxSelectableSeats,
}) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const { updateBookingDetails } = useBookingStore();
  const router = useRouter();
  const handleSeatClick = (seat: ISeat, row: string) => {
    const seatIdentifier = `${row}${seat.number}`;

    if (selectedSeats.includes(seatIdentifier)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatIdentifier));
    } else if (selectedSeats.length < maxSelectableSeats) {
      setSelectedSeats([...selectedSeats, seatIdentifier]);
    }
  };
  const handlerReservationSeat = () => {
    updateBookingDetails({ seat: selectedSeats });
    router.push("/booking/payment");
  };
  return (
    <div className="flex flex-col items-center">
      {seatMap.map((row, rowIndex) => (
        <div key={rowIndex} className="flex items-center mb-2">
          <span className="mr-4 text-lg font-bold">{row.row}</span>
          {row.seats.map((seat) => (
            <Seat
              key={seat.number}
              seat={seat}
              isSelected={selectedSeats.includes(`${row.row}${seat.number}`)}
              onSeatClick={() => handleSeatClick(seat, row.row)}
            />
          ))}
        </div>
      ))}
      <div className="mt-4 text-center">
        <h3 className="font-semibold">Asientos seleccionados:</h3>
        <p>{selectedSeats.length > 0 ? selectedSeats.join(", ") : "Ninguno"}</p>
        {selectedSeats.length === maxSelectableSeats && (
          <p className="text-red-500">
            Has alcanzado el número máximo de asientos seleccionados.
          </p>
        )}
        <Button
          className="mt-5 text-2xl py-6"
          onClick={handlerReservationSeat}
          disabled={selectedSeats.length !== maxSelectableSeats}
        >
          Reservar
        </Button>
      </div>
    </div>
  );
};
