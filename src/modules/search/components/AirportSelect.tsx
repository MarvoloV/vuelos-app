import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/modules/shared/components/ui/select";
import { SearchAirport } from "@/modules/shared/interfaces";
import { LucideProps } from "lucide-react";

interface AirportSelectProps {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  options: SearchAirport[];
  placeholder: string;
  onValueChange: (value: string) => void;
}

export const AirportSelect: React.FC<AirportSelectProps> = ({
  icon: Icon,
  options,
  placeholder,
  onValueChange,
}) => (
  <Select onValueChange={onValueChange}>
    <SelectTrigger>
      <Icon size={20} />
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      {options.map((airport) => (
        <SelectItem value={airport.codeIATA} key={airport.id}>
          {airport.fullLocation}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);
