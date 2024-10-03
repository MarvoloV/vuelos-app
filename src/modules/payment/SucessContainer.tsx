"use client";
import { useRef } from "react";
import { useBookingStore } from "../shared/store/BookingStore";
import html2canvas from "html2canvas";
import { Booking } from "../shared/interfaces";
import { useRouter } from "next/navigation";
import { useRedirectIfNotSelected } from "../shared/hooks/redirect";
import { DownloadButton } from "./components/DownloadButton";
import BoardingPass from "./components/BoardingPass";

export const SucessContainer = () => {
  const { isValid } = useRedirectIfNotSelected();
  const selectTrip = useBookingStore(
    (state) => state.selectedBooking,
  ) as Booking;
  const { clearBooking } = useBookingStore();
  const router = useRouter();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  if (!isValid) {
    return <div>Cargando...</div>;
  }

  const handleDownloadImage = async () => {
    for (let i = 0; i < cardRefs.current.length; i++) {
      const cardRef = cardRefs.current[i];
      if (cardRef) {
        const canvas = await html2canvas(cardRef);
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = `ticket_${selectTrip.passengers[i].name}.png`;
        link.click();
      }
    }
    clearBooking();
    router.push("/");
  };

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-8 items-center justify-center">
        {selectTrip?.passengers.map((passenger, index) => (
          <BoardingPass
            key={passenger.name}
            passenger={passenger}
            selectTrip={selectTrip}
            index={index}
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
          />
        ))}
      </div>
      <div className=" flex justify-center">
        <DownloadButton onClick={handleDownloadImage} />
      </div>
    </>
  );
};
