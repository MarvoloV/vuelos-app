import { useEffect, useState } from "react";
import { useBookingStore } from "@/modules/shared/store/BookingStore";

export const useRedirectIfNotSelected = () => {
  const [isValid, setIsValid] = useState(false);
  const selectTrip = useBookingStore((state) => state.selectedBooking);

  useEffect(() => {
    if (!selectTrip) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [selectTrip]);
  return { isValid };
};
