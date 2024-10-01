import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/modules/shared/components/ui/card";

export const TravelPreparation = () => {
  const preparations = [
    {
      title: "Check-in online",
      description: "Obtén tu pase de abordar y ahorra tiempo en el aeropuerto.",
      icon: "🎫",
    },
    {
      title: "Centro de ayuda",
      description:
        "Busca y encuentra información útil para resolver tus preguntas.",
      icon: "🔍",
    },
    {
      title: "Requisitos para viajar",
      description: "Infórmate acerca de visas, vacunas y demás documentos.",
      icon: "🌎",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Prepárate para viajar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {preparations.map((item) => (
          <Card key={item.title} className="border-black/30">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-2">{item.icon}</span>
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
