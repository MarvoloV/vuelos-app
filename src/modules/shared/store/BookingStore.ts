import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Booking, TripSelect } from "../interfaces";

interface BookingStore {
  selectedBooking: TripSelect | Booking | null;

  selectTrip: (trip: TripSelect) => void;
  updateBookingDetails: (details: Partial<Booking>) => void;
  clearBooking: () => void;
}

export const useBookingStore = create<BookingStore>()(
  persist(
    (set, get) => ({
      selectedBooking: null,

      // Métodos
      selectTrip: (trip: TripSelect) => set({ selectedBooking: trip }),
      getBooking: () => {
        const { selectedBooking } = get();
        return selectedBooking;
      },
      updateBookingDetails: (details: Partial<Booking>) => {
        set((state) => {
          if (state.selectedBooking) {
            return {
              selectedBooking: {
                ...state.selectedBooking,
                ...details,
              },
            };
          }
          return state;
        });
      },

      clearBooking: () => set({ selectedBooking: null }),
    }),
    {
      name: "selected-trip",
    },
  ),
);
