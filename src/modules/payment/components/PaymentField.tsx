import React from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/modules/shared/components/ui/form";
import { Input } from "@/modules/shared/components/ui/input";

interface PaymentFieldProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: string;
  label: string;
  type?: string;
  maxLength?: number;
  placeholder?: string;
  format?: "validThru";
}

export const PaymentField: React.FC<PaymentFieldProps> = ({
  control,
  name,
  label,
  type = "text",
  maxLength,
  placeholder,
  format,
}) => {
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    field: any,
  ) => {
    const { value } = event.target;

    if (format === "validThru") {
      const cleanedValue = value.replace(/\D/g, "");
      let formattedValue = cleanedValue;
      if (cleanedValue.length > 2) {
        formattedValue = `${cleanedValue.slice(0, 2)}/${cleanedValue.slice(2, 4)}`;
      } else if (cleanedValue.length > 0) {
        formattedValue = `${cleanedValue.slice(0, 2)}`;
      }
      field.onChange(formattedValue);
    } else {
      field.onChange(value);
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              maxLength={maxLength}
              placeholder={placeholder}
              {...field}
              value={field.value}
              onChange={(event) => handleInputChange(event, field)}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
