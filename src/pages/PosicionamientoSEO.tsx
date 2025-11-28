// src/pages/PosicionamientoSEO.tsx
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, TrendingUp, Search, Target, BarChart } from "lucide-react";

const PosicionamientoSEO = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 bg-gradient-to-br from-primary/10 to-cta/10">
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-montserrat text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight">
              POSICIONAMIENTO SEO
              <br />
              <span className="text-cta">TOP EN GOOGLE</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Lleva tu negocio a la primera página de Google y atrae clientes de forma orgánica
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
              Solicita tu Auditoría SEO Gratis
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-cta mb-2">75%</div>
              <p className="text-gray-700">de usuarios nunca pasan de la primera página</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-cta mb-2">3X</div>
              <p className="text-gray-700">más clics que los anuncios pagados</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-cta mb-2">24/7</div>
              <p className="text-gray-700">trabajando para tu negocio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-950 mb-4">
              Nuestros Servicios <span className="text-cta">SEO</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Search,
                title: "SEO Técnico",
                description: "Optimización completa de tu sitio para los motores de búsqueda"
              },
              {
                icon: Target,
                title: "Keywords Strategy",
                description: "Investigación y targeting de palabras clave relevantes"
              },
              {
                icon: TrendingUp,
                title: "Link Building",
                description: "Construcción de autoridad con enlaces de calidad"
              },
              {
                icon: BarChart,
                title: "Contenido SEO",
                description: "Creación de contenido optimizado que rankea y convierte"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-cta/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-cta" />
                  </div>
                  <h3 className="font-montserrat text-xl font-bold text-gray-950 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-950 mb-12 text-center">
              Nuestro Proceso <span className="text-cta">SEO</span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Auditoría Completa",
                  description: "Analizamos tu sitio web y competencia para identificar oportunidades"
                },
                {
                  step: "02",
                  title: "Estrategia Personalizada",
                  description: "Creamos un plan SEO adaptado a tus objetivos y mercado"
                },
                {
                  step: "03",
                  title: "Implementación",
                  description: "Optimizamos tu sitio y comenzamos a construir autoridad"
                },
                {
                  step: "04",
                  title: "Monitoreo y Ajustes",
                  description: "Seguimiento continuo y optimización basada en resultados"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6 p-6 bg-secondary rounded-lg">
                  <div className="w-16 h-16 bg-cta rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-montserrat font-bold text-white text-xl">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-montserrat text-2xl font-bold text-gray-950 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
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
                Empezar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default PosicionamientoSEO;
