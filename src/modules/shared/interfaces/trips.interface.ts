interface Passenger {
  name: string;
  lastname: string;
}
export interface ClassDetail {
  classType: string;
  price: number;
  seatsLeft: number;
}
interface FlightDetails {
  flight: string;
  gate: string;
}
export interface Trip {
  id: number;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  date: string;
  classDetails: ClassDetail[];
  flightDetails: FlightDetails;
}
export interface TripSelect extends Trip {
  price: string;
  classType: string;
  originCode: string;
  destinationCode: string;
  quantity: number;
}
export interface Booking extends TripSelect {
  passengers: Passenger[];
  flightNumber: string;
  gate: string;
  seat: string[];
}
