import { Airport, SearchAirport } from "@/modules/shared/interfaces";

export const adaptAirports = (airports: Airport[]): SearchAirport[] => {
  return airports.map((airport) => ({
    id: airport.id,
    fullLocation: `${airport.city} ${airport.region}`,
    codeIATA: airport.codeIATA,
  }));
};
