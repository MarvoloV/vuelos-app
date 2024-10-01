import { SearchAirport, Trip } from "@/modules/shared/interfaces";
import { airports } from "@/modules/shared/mocks/listAirPort";
import { adaptAirports } from "../adapters/SearchAdapter";
import { internalPeruFlights } from "@/modules/shared/mocks/listResultTrips";

export const getAirports = async (): Promise<SearchAirport[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(adaptAirports(airports));
    }, 1000);
  });
};
export const filterFlights = async (
  origin?: string,
  destination?: string,
  date?: string,
): Promise<Trip[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredFlights = internalPeruFlights.filter((trip) => {
        const matchesOrigin = origin ? trip.origin.includes(origin) : true;
        const matchesDestination = destination
          ? trip.destination.includes(destination)
          : true;
        const matchesDate = date ? trip.date === date : true;
        return matchesOrigin && matchesDestination && matchesDate;
      });
      resolve(filteredFlights);
    }, 1000);
  });
};
