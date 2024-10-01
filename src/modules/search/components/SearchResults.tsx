import React from "react";
import { SearchCard } from "./SearchCard";
import { Trip } from "@/modules/shared/interfaces";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/modules/shared/components/ui/card";

interface Props {
  trips: Trip[];
}
export const SearchResults: React.FC<Props> = ({ trips }) => {
  return (
    <div className="grid grid-cols-4 gap-8">
      {trips.length > 0 ? (
        trips.map((trip) => <SearchCard trip={trip} key={trip.id} />)
      ) : (
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>No hay datos</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Lo sentimos, no se encontraron viajes disponibles.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
