"use client";
import { ButtonBack } from "@/modules/shared/components/ui/ButtonBack";
import React, { Suspense } from "react";
import { useTravelSearchParams } from "../hooks/useSearchParamsTravel";
import { PlaneTakeoff, UserRound } from "lucide-react";

export const HeaderResult = () => {
  const { originTravel, destinationTravel, date, quantity } =
    useTravelSearchParams();
  return (
    <Suspense>
      {/* <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-black/40"> */}

      <header className=" border bg-card text-card-foreground  flex justify-between items-center bg-white px-4 py-2 rounded-lg shadow-md  border-black/40 w-full">
        <ButtonBack />
        <div className="flex items-center space-x-4">
          <div>
            <h1 className="text-2xl font-bold">
              {originTravel} a {destinationTravel}
            </h1>
            <div className="flex gap-x-2">
              <div className="text-sm text-gray-500 text-right flex items-center gap-1">
                <PlaneTakeoff size={16} color="#000" />
                <p className="mt-[2px]">{date}</p>
              </div>

              <div className="text-sm text-gray-500 text-right flex items-center gap-1">
                <UserRound size={16} color="#000" />
                <p className="text-sm text-gray-500 mt-[2px]">{quantity}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Suspense>
  );
};
