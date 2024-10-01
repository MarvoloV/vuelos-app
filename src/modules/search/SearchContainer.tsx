import React from "react";
import {
  FlightExperience,
  SearchForm,
  TravelOffers,
  TravelPreparation,
} from "./components";

export const SearchContainer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200/65  p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <SearchForm />
        <TravelOffers />
        <TravelPreparation />
        <FlightExperience />
      </div>
    </div>
  );
};
