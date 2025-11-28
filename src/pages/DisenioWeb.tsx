
// src/pages/DisenioWeb.tsx
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Smartphone, Zap, Palette, Code } from "lucide-react";

const DisenioWeb = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 bg-gradient-to-br from-primary/10 to-cta/10">
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-montserrat text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight">
              DISEÑO WEB
              <br />
              <span className="text-cta">QUE CONVIERTE</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Creamos sitios web modernos, rápidos y optimizados para convertir visitantes en clientes
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
              Solicita tu Presupuesto
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-950 mb-4">
              ¿Por Qué Elegir Nuestro <span className="text-cta">Diseño Web</span>?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Palette,
                title: "Diseño Moderno",
                description: "Interfaces atractivas y actuales que captan la atención de tus visitantes"
              },
              {
                icon: Zap,
                title: "Velocidad Óptima",
                description: "Sitios ultrarrápidos que mejoran tu SEO y experiencia de usuario"
              },
              {
                icon: Smartphone,
                title: "100% Responsive",
                description: "Perfecto en todos los dispositivos: móvil, tablet y desktop"
              },
              {
                icon: Code,
                title: "Código Limpio",
                description: "Desarrollo profesional con las mejores prácticas del mercado"
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

      {/* Features Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-950 mb-12 text-center">
              Lo Que Incluye Nuestro <span className="text-cta">Servicio</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Diseño personalizado según tu marca",
                "Optimización para motores de búsqueda (SEO)",
                "Integración con Google Analytics",
                "Formularios de contacto optimizados",
                "Certificado SSL incluido",
                "Hosting de alta velocidad",
                "Capacitación para gestionar tu sitio",
                "Soporte técnico continuo"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-cta" strokeWidth={3} />
                  </div>
                  <span className="text-gray-950 text-lg">{feature}</span>
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
                Comenzar mi Proyecto
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default DisenioWeb;
