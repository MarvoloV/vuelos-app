import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/modules/shared/components/ui/card";

interface CardSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const CardSection: React.FC<CardSectionProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
