"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./button";
import { MoveLeft } from "lucide-react";

export const ButtonBack = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Button
      variant="link"
      className="p-0 h-auto text-xl "
      onClick={handleBackClick}
    >
      <MoveLeft size={24} className="mr-2" /> Volver
    </Button>
  );
};
