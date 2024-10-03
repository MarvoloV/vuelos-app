/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/modules/shared/components/ui/card";
export const FlightExperience = () => {
  const experiences = [
    {
      title: "Inspírate",
      description:
        "Explora nuestros destinos y planea tu próxima aventura. Sácale provecho a tu siguiente vuelo.",
      image: "/images/explora-destinos-e-inspirate-con-avianca.webp",
    },
    {
      title: "Experiencia avianca",
      description:
        "¡Listo para despegar! Descubre los servicios a bordo que te ofrecemos al volar con nosotros.",
      image: "/images/descubre-servicios-a-bordo-experiencia-avianca.webp",
    },
    {
      title: "Avianca Lifemiles",
      description:
        "Conoce nuestro programa de viajero frecuente y acumula millas con tus vuelos.",
      image: "/images/conoce-nuestro-programa-lifemiles-viajero-frecuente.webp",
    },
    {
      title: "Equipaje",
      description:
        "Entérate de las condiciones que debes tener en cuenta al momento de preparar tu equipaje.",
      image: "/images/enterate-condiciones-equipaje.webp",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-10 text-center">
        Vuela como más te gusta
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {experiences.map((feature) => (
          <Card
            key={feature.title}
            className="overflow-hidden relative shadow-lg border-black/30 hover:cursor-pointer"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <CardTitle className="mb-2">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
