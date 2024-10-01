"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlaneLanding, PlaneTakeoff, Search, User } from "lucide-react";

import { Button } from "@/modules/shared/components/ui/button";
import { Card, CardContent } from "@/modules/shared/components/ui/card";
import { Input } from "@/modules/shared/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/modules/shared/components/ui/select";

import { getAirports } from "../services/airportService";
import { SearchAirport } from "@/modules/shared/interfaces";
import { ZFormSearch } from "../schema/searchSchema";
import { AirportSelect } from "./AirportSelect";
import { useRouter } from "next/navigation";

export const SearchForm: React.FC = () => {
  const router = useRouter();
  const [airports, setAirports] = useState<SearchAirport[]>([]);

  const showAirports = async () => {
    const response = await getAirports();
    setAirports(response);
  };

  useEffect(() => {
    showAirports();
  }, []);

  const form = useForm<z.infer<typeof ZFormSearch>>({
    resolver: zodResolver(ZFormSearch),
  });

  const onSubmit = (data: z.infer<typeof ZFormSearch>) => {
    const query = new URLSearchParams({
      origin: data.origin,
      destination: data.destination,
      date: data.date,
      quantity: data.quantity,
    }).toString();
    router.push(`/results?${query}`);
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-black/40">
      <CardContent className="p-6">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-4">
            <AirportSelect
              icon={PlaneTakeoff}
              options={airports}
              placeholder="Seleccionar el origen"
              onValueChange={form.setValue.bind(null, "origin")}
            />
            <AirportSelect
              icon={PlaneLanding}
              options={airports}
              placeholder="Seleccionar el destino"
              onValueChange={form.setValue.bind(null, "destination")}
            />
            <Input type="date" {...form.register("date")} className="w-44" />

            <Select onValueChange={form.setValue.bind(null, "quantity")}>
              <SelectTrigger className="w-[132px]">
                <User size={20} />
                <SelectValue placeholder="Pasajeros" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
              </SelectContent>
            </Select>

            <Button
              type="submit"
              className="text-white hover:bg-gray-800 text-lg flex gap-2"
            >
              <Search size={20} />
              Search
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
