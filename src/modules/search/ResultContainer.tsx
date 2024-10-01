import React from "react";
import { SearchResults } from "./components/SearchResults";
import { HeaderResult } from "./components";
import { Trip } from "../shared/interfaces";

interface Props {
  trips: Trip[];
}

export const ResultsContainer: React.FC<Props> = ({ trips }) => {
  return (
    <div className="min-h-screen bg-gray-200/65  p-8">
      <div className="w-full max-w-7xl mx-auto space-y-8 ">
        <HeaderResult />
        <SearchResults trips={trips} />
      </div>
    </div>
  );
};
