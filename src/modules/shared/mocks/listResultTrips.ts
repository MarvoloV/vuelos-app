import { Trip } from "../interfaces";

export const internalPeruFlights: Trip[] = [
  {
    id: 1,
    origin: "Lima (LIM)",
    destination: "Cusco (CUZ)",
    departureTime: "07:30",
    arrivalTime: "09:00",
    date: "2024-10-10",
    flightDetails: {
      flight: "I123",
      gate: "1B",
    },
    classDetails: [
      { classType: "Business", price: 180.0, seatsLeft: 10 },
      { classType: "Economy", price: 100.0, seatsLeft: 30 },
    ],
  },
  {
    id: 2,
    origin: "Arequipa (AQP)",
    destination: "Lima (LIM)",
    departureTime: "09:15",
    arrivalTime: "10:45",
    date: "2024-10-11",

    flightDetails: {
      flight: "AI23",
      gate: "3B",
    },
    classDetails: [
      { classType: "Business", price: 160.0, seatsLeft: 8 },
      { classType: "Economy", price: 90.0, seatsLeft: 25 },
    ],
  },
  {
    id: 3,
    origin: "Trujillo (TRU)",
    destination: "Cusco (CUZ)",
    departureTime: "11:00",
    arrivalTime: "13:00",
    date: "2024-10-12",
    flightDetails: {
      flight: "B512",
      gate: "4C",
    },
    classDetails: [
      { classType: "Business", price: 220.0, seatsLeft: 6 },
      { classType: "Economy", price: 140.0, seatsLeft: 20 },
    ],
  },
  {
    id: 4,
    origin: "Iquitos (IQT)",
    destination: "Lima (LIM)",
    departureTime: "14:30",
    arrivalTime: "16:00",
    date: "2024-10-13",

    flightDetails: {
      flight: "F523",
      gate: "4B",
    },
    classDetails: [
      { classType: "Business", price: 220.0, seatsLeft: 8 },
      { classType: "Economy", price: 130.0, seatsLeft: 28 },
    ],
  },
  {
    id: 5,
    origin: "Tumbes (TBP)",
    destination: "Arequipa (AQP)",
    departureTime: "16:45",
    arrivalTime: "18:30",
    date: "2024-10-14",

    flightDetails: {
      flight: "I123",
      gate: "1B",
    },
    classDetails: [
      { classType: "Business", price: 240.0, seatsLeft: 5 },
      { classType: "Economy", price: 140.0, seatsLeft: 22 },
    ],
  },
  {
    id: 6,
    origin: "Piura (PIU)",
    destination: "Trujillo (TRU)",
    departureTime: "08:20",
    arrivalTime: "10:00",
    date: "2024-10-15",

    flightDetails: {
      flight: "I123",
      gate: "1B",
    },
    classDetails: [
      { classType: "Business", price: 150.0, seatsLeft: 7 },
      { classType: "Economy", price: 85.0, seatsLeft: 24 },
    ],
  },
  {
    id: 7,
    origin: "Pucallpa (PCL)",
    destination: "Iquitos (IQT)",
    departureTime: "10:30",
    arrivalTime: "12:00",
    flightDetails: {
      flight: "I123",
      gate: "1B",
    },
    date: "2024-10-16",
    classDetails: [
      { classType: "Business", price: 190.0, seatsLeft: 6 },
      { classType: "Economy", price: 110.0, seatsLeft: 20 },
    ],
  },
  {
    id: 8,
    origin: "Cajamarca (CJA)",
    destination: "Lima (LIM)",
    departureTime: "13:00",
    arrivalTime: "14:30",
    date: "2024-10-17",

    flightDetails: {
      flight: "I123",
      gate: "1B",
    },
    classDetails: [
      { classType: "Business", price: 170.0, seatsLeft: 8 },
      { classType: "Economy", price: 95.0, seatsLeft: 26 },
    ],
  },
  {
    id: 9,
    origin: "Cusco (CUZ)",
    destination: "Piura (PIU)",
    departureTime: "15:15",
    arrivalTime: "17:30",
    date: "2024-10-18",

    flightDetails: {
      flight: "I123",
      gate: "1B",
    },
    classDetails: [
      { classType: "Business", price: 230.0, seatsLeft: 7 },
      { classType: "Economy", price: 135.0, seatsLeft: 28 },
    ],
  },
  {
    id: 10,
    origin: "Lima (LIM)",
    destination: "Pucallpa (PCL)",
    departureTime: "17:30",
    arrivalTime: "19:00",

    flightDetails: {
      flight: "I123",
      gate: "1B",
    },
    date: "2024-10-19",
    classDetails: [
      { classType: "Business", price: 185.0, seatsLeft: 9 },
      { classType: "Economy", price: 105.0, seatsLeft: 30 },
    ],
  },
  {
    id: 11,
    origin: "Lima (LIM)",
    destination: "Cusco (CUZ)",
    departureTime: "07:30",
    arrivalTime: "09:00",
    date: "2024-10-10",

    flightDetails: {
      flight: "I123",
      gate: "1B",
    },
    classDetails: [
      { classType: "Business", price: 180.0, seatsLeft: 10 },
      { classType: "Economy", price: 100.0, seatsLeft: 30 },
    ],
  },
  {
    id: 12,
    origin: "Arequipa (AQP)",
    destination: "Lima (LIM)",
    departureTime: "09:15",
    arrivalTime: "10:45",

    flightDetails: {
      flight: "I123",
      gate: "1B",
    },
    date: "2024-10-11",
    classDetails: [
      { classType: "Business", price: 160.0, seatsLeft: 8 },
      { classType: "Economy", price: 90.0, seatsLeft: 25 },
    ],
  },
  {
    id: 13,
    origin: "Trujillo (TRU)",
    destination: "Cusco (CUZ)",
    departureTime: "11:00",
    arrivalTime: "13:00",
    date: "2024-10-12",

    flightDetails: {
      flight: "I123",
      gate: "1B",
    },
    classDetails: [
      { classType: "Business", price: 200.0, seatsLeft: 6 },
      { classType: "Economy", price: 120.0, seatsLeft: 20 },
    ],
  },
  {
    id: 14,
    origin: "Iquitos (IQT)",
    destination: "Lima (LIM)",
    departureTime: "14:30",
    arrivalTime: "16:00",
    date: "2024-10-13",
    flightDetails: {
      flight: "I123",
      gate: "1B",
    },
    classDetails: [
      { classType: "Business", price: 220.0, seatsLeft: 8 },
      { classType: "Economy", price: 130.0, seatsLeft: 28 },
    ],
  },
  {
    id: 15,
    origin: "Tumbes (TBP)",
    destination: "Arequipa (AQP)",
    departureTime: "16:45",
    arrivalTime: "18:30",
    date: "2024-10-14",
    flightDetails: {
      flight: "I123",
      gate: "1B",
    },
    classDetails: [
      { classType: "Business", price: 210.0, seatsLeft: 5 },
      { classType: "Economy", price: 130.0, seatsLeft: 22 },
    ],
  },
  {
    id: 16,
    origin: "Piura (PIU)",
    destination: "Trujillo (TRU)",
    departureTime: "08:20",
    arrivalTime: "10:00",
    date: "2024-10-15",
    flightDetails: {
      flight: "I123",
      gate: "1B",
    },
    classDetails: [
      { classType: "Business", price: 350.0, seatsLeft: 7 },
      { classType: "Economy", price: 185.0, seatsLeft: 24 },
    ],
  },
  {
    id: 17,
    origin: "Pucallpa (PCL)",
    destination: "Iquitos (IQT)",
    departureTime: "10:30",
    arrivalTime: "12:00",
    date: "2024-10-16",
    flightDetails: {
      flight: "I123",
      gate: "1B",
    },
    classDetails: [
      { classType: "Business", price: 210.0, seatsLeft: 6 },
      { classType: "Economy", price: 102.0, seatsLeft: 20 },
    ],
  },
  {
    id: 18,
    origin: "Cajamarca (CJA)",
    destination: "Lima (LIM)",
    departureTime: "13:00",
    arrivalTime: "14:30",
    date: "2024-10-17",
    flightDetails: {
      flight: "I123",
      gate: "1B",
    },
    classDetails: [
      { classType: "Business", price: 120.0, seatsLeft: 8 },
      { classType: "Economy", price: 12.0, seatsLeft: 26 },
    ],
  },
  {
    id: 19,
    origin: "Cusco (CUZ)",
    destination: "Piura (PIU)",
    departureTime: "15:15",
    arrivalTime: "17:30",
    date: "2024-10-18",

    flightDetails: {
      flight: "I123",
      gate: "1B",
    },
    classDetails: [
      { classType: "Business", price: 210.0, seatsLeft: 7 },
      { classType: "Economy", price: 170.0, seatsLeft: 28 },
    ],
  },
  {
    id: 20,
    origin: "Lima (LIM)",
    destination: "Pucallpa (PCL)",
    departureTime: "17:30",
    arrivalTime: "19:00",
    date: "2024-10-19",
    flightDetails: {
      flight: "I123",
      gate: "1B",
    },
    classDetails: [
      { classType: "Business", price: 220.0, seatsLeft: 9 },
      { classType: "Economy", price: 132.0, seatsLeft: 30 },
    ],
  },
];
