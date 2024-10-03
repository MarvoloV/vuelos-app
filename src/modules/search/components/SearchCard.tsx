"use client";
import React from "react";
import { Card, CardContent } from "@/modules/shared/components/ui/card";
import { Button } from "@/modules/shared/components/ui/button";
import { Trip, TripSelect } from "@/modules/shared/interfaces";
import { useBookingStore } from "@/modules/shared/store/BookingStore";
import { useTravelSearchParams } from "../hooks/useSearchParamsTravel";
import { useRouter } from "next/navigation";

interface Props {
  trip: Trip;
}
export const SearchCard: React.FC<Props> = ({ trip }) => {
  const { originTravel, destinationTravel, quantity } = useTravelSearchParams();
  const router = useRouter();
  const { selectTrip } = useBookingStore();

  const handleReserve = (classType: string) => {
    const tripSelect = trip as TripSelect;
    tripSelect.classType = classType;
    tripSelect.originCode = originTravel || "";
    tripSelect.destinationCode = destinationTravel || "";
    tripSelect.quantity = Number(quantity || 0);
    selectTrip(tripSelect);
    router.push("/booking");
  };
  return (
    <Card className="col-span-4  px-4 bg-white rounded-lg shadow border-black/20 border p-2 md:p-6 py-2">
      <CardContent className="flex justify-between items-center  p-0 md:p-6 py-2">
        <div className="flex items-center space-x-4">
          <div>
            <h3 className="font-semibold">{trip.origin}</h3>
            <p className="text-sm text-gray-500">
              {trip.departureTime} - {trip.date}
            </p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
        <div>
          <h3 className="font-semibold">{trip.destination}</h3>
          <p className="text-sm text-gray-500">
            {trip.arrivalTime} - {trip.date}
          </p>
        </div>
        {trip.classDetails.map((detail) => (
          <div key={detail.classType}>
            <div className="text-sm font-semibold text-center">
              {detail.classType}
            </div>
            <div className="text-2xl font-bold text-center">
              ${detail.price}
            </div>
            <Button
              className="w-full hover:bg-black hover:text-white"
              variant="outline"
              onClick={() => handleReserve(detail.classType)}
            >
              Reservar
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
