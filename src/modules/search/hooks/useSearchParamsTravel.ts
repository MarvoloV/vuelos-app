"use client";
import { useBookingStore } from "@/modules/shared/store/BookingStore";
import { useSearchParams } from "next/navigation";

export const useTravelSearchParams = () => {
  const searchParams = useSearchParams();
  const selectTrip = useBookingStore((state) => state.selectedBooking);
  const originTravel = searchParams.get("origin") || selectTrip?.originCode;
  const destinationTravel =
    searchParams.get("destination") || selectTrip?.destinationCode;
  const date = searchParams.get("date") || selectTrip?.date;
  const quantity = searchParams.get("quantity") || selectTrip?.quantity;

  return {
    originTravel,
    destinationTravel,
    date,
    quantity,
  };
};
