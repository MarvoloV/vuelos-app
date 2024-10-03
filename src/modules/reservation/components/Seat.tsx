import React from "react";
import { ISeat } from "../interfaces/seat.interface";
interface SeatProps {
  seat: ISeat;
  onSeatClick: (seat: ISeat) => void;
  isSelected: boolean;
}

export const Seat: React.FC<SeatProps> = ({
  seat,
  onSeatClick,
  isSelected,
}) => {
  return (
    <div
      className={`w-10 h-10 flex items-center justify-center m-1 
        ${
          seat.reserved
            ? "bg-red-500 cursor-not-allowed"
            : isSelected
              ? "bg-blue-500 cursor-pointer"
              : "bg-green-500 cursor-pointer"
        } 
        text-white rounded-md`}
      onClick={() => !seat.reserved && onSeatClick(seat)}
    >
      {seat.number}
    </div>
  );
};
