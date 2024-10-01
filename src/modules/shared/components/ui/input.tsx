/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full border-b border-raisin-black bg-transparent py-2 text-xl ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-raisin-black/50 focus:border-blue-800 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
