/* eslint-disable @next/next/no-img-element */
import { Button } from "@/modules/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/modules/shared/components/ui/card";
export const TravelOffers = () => {
  const offers = [
    {
      name: "Aruba",
      image: "/images/vuelos-a-aruba-flamenco.webp",
      price: "USD 139",
      points: "PEN 520",
    },
    {
      name: "La Paz",
      image: "/images/vuelos-a-la-paz-bolivia-salar-uyuni.webp",
      price: "USD 141",
      points: "PEN 557",
    },
    {
      name: "Cancún",
      image: "/images/l-vuelos-baratos-a-cancun-mexico-atardecer-playa-mvp.jpg",
      price: "USD 148",
      points: "PEN 554",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Ofertas desde <span className="text-blue-500 underline">Lima</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((destination) => (
          <Card
            key={destination.name}
            className="overflow-hidden relative border-black/30"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4 z-50">
              <CardTitle className="text-xl">{destination.name}</CardTitle>
              <CardDescription className="text-lg">
                Por trayecto desde
              </CardDescription>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xl font-bold">{destination.price}</span>
                <span className="text text-gray-500">{destination.points}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-right mt-4">
        <Button variant="link" className="text-blue-500">
          Descubrir más ofertas →
        </Button>
      </div>
    </section>
  );
};
