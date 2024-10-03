"use client";
import { PaymentForm } from "./components/PaymentForm";
import { useRedirectIfNotSelected } from "../shared/hooks/redirect";

export const PaymentContainer = () => {
  const { isValid } = useRedirectIfNotSelected();
  if (!isValid) {
    return <div>Cargando...</div>;
  }

  return <PaymentForm />;
};
