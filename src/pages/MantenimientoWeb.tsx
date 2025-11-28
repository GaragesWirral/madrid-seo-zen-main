// src/pages/MantenimientoWeb.tsx
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, Wrench, Zap, HeadphonesIcon } from "lucide-react";

const MantenimientoWeb = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 bg-gradient-to-br from-primary/10 to-cta/10">
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-montserrat text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight">
              MANTENIMIENTO WEB
              <br />
              <span className="text-cta">SIEMPRE ACTIVO</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Tu sitio web seguro, actualizado y funcionando perfectamente 24/7
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
              Protege tu Sitio Web
            </Button>
          </div>
        </div>
      </section>

      {/* Why Maintenance Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-950 mb-6">
              ¿Por Qué Necesitas <span className="text-cta">Mantenimiento</span>?
            </h2>
            <p className="text-xl text-gray-700">
              Un sitio web sin mantenimiento es vulnerable a hackeos, errores y pérdida de posicionamiento
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Seguridad",
                description: "Protección contra hackeos y malware con actualizaciones constantes"
              },
              {
                icon: Zap,
                title: "Rendimiento",
                description: "Optimización continua para mantener tu sitio rápido"
              },
              {
                icon: Wrench,
                title: "Actualizaciones",
                description: "Plugins y temas siempre al día sin riesgo de errores"
              },
              {
                icon: HeadphonesIcon,
                title: "Soporte",
                description: "Respuesta rápida ante cualquier problema técnico"
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

      {/* Plans Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-950 mb-4">
              Nuestros Planes de <span className="text-cta">Mantenimiento</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Básico",
                features: [
                  "Actualizaciones mensuales",
                  "Backup semanal",
                  "Monitoreo de seguridad",
                  "Soporte por email"
                ]
              },
              {
                name: "Profesional",
                popular: true,
                features: [
                  "Actualizaciones semanales",
                  "Backup diario",
                  "Monitoreo 24/7",
                  "Soporte prioritario",
                  "Optimización de velocidad",
                  "Informe mensual"
                ]
              },
              {
                name: "Premium",
                features: [
                  "Actualizaciones inmediatas",
                  "Backup en tiempo real",
                  "Seguridad avanzada",
                  "Soporte dedicado",
                  "Optimización continua",
                  "Cambios menores incluidos"
                ]
              }
            ].map((plan, index) => (
              <Card key={index} className={`bg-white border-2 ${plan.popular ? 'border-cta shadow-2xl scale-105' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="bg-cta text-white text-center py-2 font-bold">
                    MÁS POPULAR
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="font-montserrat text-2xl font-bold text-gray-950 mb-6 text-center">
                    {plan.name}
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-cta" strokeWidth={3} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.popular ? "cta" : "outline"} 
                    className="w-full"
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                  >
                    Contratar Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default MantenimientoWeb;
