import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/modules/shared/components/ui/card";
import { Booking } from "@/modules/shared/interfaces";
import { Plane } from "lucide-react";
import React from "react";

interface BoardingPassProps {
  passenger: { name: string; lastname: string };
  selectTrip: Booking;
  index: number;
  ref: React.Ref<HTMLDivElement>;
}

const BoardingPass = React.forwardRef<HTMLDivElement, BoardingPassProps>(
  ({ passenger, selectTrip, index }, ref) => (
    <div ref={ref}>
      <Card className="w-full max-w-xl mx-auto bg-white text-black shadow-none ">
        <CardHeader className="bg-blue-950 text-white p-4 flex flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <Plane size={35} />
            <CardTitle className="text-xl font-bold">Air Lines</CardTitle>
          </div>
          <div className="text-xl font-bold">BOARDING PASS</div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 space-y-4">
              <div>
                <div className="text-sm font-semibold">PASSENGER NAME</div>
                <div className="text-lg">{`${passenger.name} ${passenger.lastname}`}</div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="text-sm font-semibold">FROM</div>
                  <div>{selectTrip.origin}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold">TO</div>
                  <div>{selectTrip.destination}</div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="text-sm font-semibold">DATE</div>
                  <div className="text-2xl font-bold text-sky-700">
                    {selectTrip.date}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold">TIME</div>
                  <div className="text-2xl font-bold text-sky-700">
                    {selectTrip.departureTime}
                  </div>
                </div>
              </div>
              <div className="flex justify-between bg-blue-950 text-white p-2 rounded">
                <div>
                  <div className="text-sm font-semibold">FLIGHT</div>
                  <div className="font-bold">
                    {selectTrip.flightDetails.flight}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold">GATE</div>
                  <div className="font-bold">
                    {selectTrip.flightDetails.gate}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold">SEAT</div>
                  <div className="font-bold">{selectTrip.seat[index]}</div>
                </div>
              </div>
              <div className="text-sm">
                <span className="font-semibold">IMPORTANT NOTE:</span> You
                should be at the boarding gate before {selectTrip.departureTime}
              </div>
            </div>
            <div className="border-l-2 border-dashed border-black pl-6 flex flex-col justify-between">
              <div>
                <div className="text-sm font-semibold">PASSENGER</div>
                <div>{`${passenger.name} ${passenger.lastname}`}</div>
              </div>
              <div>
                <div className="text-sm font-semibold">FROM</div>
                <div>{selectTrip.origin}</div>
              </div>
              <div>
                <div className="text-sm font-semibold">TO</div>
                <div>{selectTrip.destination}</div>
              </div>
              <div>
                <div className="text-sm font-semibold">FLIGHT</div>
                <div className="text-xl font-bold">
                  {selectTrip.flightDetails.flight} {selectTrip.originCode} →{" "}
                  {selectTrip.destinationCode}
                </div>
              </div>
              <div className="w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center">
                <Plane size={35} color="white" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
);

BoardingPass.displayName = "BoardingPass"; // Required for forwardRef to work correctly

export default BoardingPass;
