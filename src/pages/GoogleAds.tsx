// src/pages/GoogleAds.tsx
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Target, DollarSign, BarChart3, Users } from "lucide-react";

const GoogleAds = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 bg-gradient-to-br from-primary/10 to-cta/10">
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-montserrat text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight">
              GOOGLE ADS
              <br />
              <span className="text-cta">RESULTADOS INMEDIATOS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Genera clientes desde el primer día con campañas de Google Ads optimizadas para máximo ROI
            </p>
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Lanza tu Campaña
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-950 mb-4">
              ¿Por Qué <span className="text-cta">Google Ads</span>?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Alta Intención",
                description: "Llegas a personas que buscan activamente lo que ofreces"
              },
              {
                icon: DollarSign,
                title: "Control Total",
                description: "Tú decides cuánto gastar y pagas solo por clics reales"
              },
              {
                icon: BarChart3,
                title: "Medible al 100%",
                description: "Seguimiento preciso de cada euro invertido y su retorno"
              },
              {
                icon: Users,
                title: "Escalable",
                description: "Aumenta tu inversión cuando veas resultados positivos"
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-cta/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <benefit.icon className="w-8 h-8 text-cta" />
                  </div>
                  <h3 className="font-montserrat text-xl font-bold text-gray-950 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-950 mb-12 text-center">
              Tipos de <span className="text-cta">Campañas</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: "Búsqueda",
                  description: "Aparece en los primeros resultados cuando buscan tus servicios",
                  features: [
                    "Palabras clave estratégicas",
                    "Anuncios en primera posición",
                    "Alta intención de compra"
                  ]
                },
                {
                  title: "Display",
                  description: "Llega a millones de sitios web con anuncios visuales",
                  features: [
                    "Alcance masivo",
                    "Remarketing efectivo",
                    "Branding visual"
                  ]
                },
                {
                  title: "Shopping",
                  description: "Perfecto para ecommerce, muestra tus productos directamente",
                  features: [
                    "Fotos de productos",
                    "Precio visible",
                    "Mayor tasa de conversión"
                  ]
                },
                {
                  title: "Video (YouTube)",
                  description: "Publicidad en la segunda plataforma de búsqueda más grande",
                  features: [
                    "Contenido visual atractivo",
                    "Segmentación precisa",
                    "Gran alcance"
                  ]
                }
              ].map((campaign, index) => (
                <Card key={index} className="bg-white border-gray-200">
                  <CardContent className="p-8">
                    <h3 className="font-montserrat text-2xl font-bold text-gray-950 mb-3">
                      {campaign.title}
                    </h3>
                    <p className="text-gray-700 mb-6">{campaign.description}</p>
                    <ul className="space-y-3">
                      {campaign.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-cta" strokeWidth={3} />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-950 mb-12 text-center">
              ¿Qué <span className="text-cta">Incluimos</span>?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Investigación de palabras clave",
                "Creación de anuncios persuasivos",
                "Configuración de campañas",
                "Optimización de pujas",
                "Seguimiento de conversiones",
                "A/B testing continuo",
                "Informes mensuales detallados",
                "Reuniones de estrategia"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-cta" strokeWidth={3} />
                  </div>
                  <span className="text-gray-950 text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Comenzar mi Campaña
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default GoogleAds;
