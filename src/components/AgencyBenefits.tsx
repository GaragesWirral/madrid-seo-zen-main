import { MessageSquare, Target, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    id: "01",
    icon: MessageSquare,
    title: "Soporte Dedicado",
    titleHighlight: "Soporte",
    description: "A diferencia de las agencias que desaparecen después de contratarte, tendrás acceso directo a nuestro equipo a través de un canal dedicado.",
    subtext: "Obtén respuestas inmediatas a tus preguntas y nunca te sientas abandonado con tu marketing."
  },
  {
    id: "02",
    icon: Target,
    title: "Estrategias Personalizadas",
    titleHighlight: "Personalizadas",
    description: "Planes de SEO adaptados para Amazon, Local y éxito Web. Alineamos nuestros esfuerzos con tus objetivos para asegurar que tu marca destaque y crezca en su nicho.",
    subtext: "Tu estrategia es única, diseñada específicamente para las necesidades de tu negocio."
  },
  {
    id: "03",
    icon: FileText,
    title: "Informes Mensuales Detallados",
    titleHighlight: "Mensuales Detallados",
    description: "Recibe informes mensuales detallados que muestran exactamente cómo se están desempeñando tus inversiones en marketing.",
    subtext: "Rastreamos leads, conversiones y ROI para que puedas ver el impacto real en tu negocio."
  }
];

const AgencyBenefits = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-950 mb-4">
            <span className="text-cta">No Más</span> Experiencias Frustrantes con Agencias
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <Card key={benefit.id} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 relative">
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-cta rounded-full flex items-center justify-center font-montserrat font-bold text-white">
                  {benefit.id}
                </div>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-cta/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-cta" />
                  </div>
                  <h3 className="font-montserrat text-xl font-bold text-gray-950 mb-4">
                    {benefit.title.split(benefit.titleHighlight)[0]}
                    <span className="text-cta">{benefit.titleHighlight}</span>
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.subtext}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgencyBenefits;
