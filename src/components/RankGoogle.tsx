import { TrendingUp, Search, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import seoRankingImage from "@/assets/seo-ranking-improvement.jpg";

const benefits = [
  {
    icon: Search,
    title: "SEO Técnico",
    description: "Optimización completa de tu sitio web para los motores de búsqueda"
  },
  {
    icon: TrendingUp,
    title: "Contenido Optimizado",
    description: "Estrategia de contenidos que atrae y convierte"
  },
  {
    icon: Target,
    title: "Keywords Locales",
    description: "Dominamos las búsquedas locales de tu área"
  }
];

const RankGoogle = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/20 to-cta/20 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={seoRankingImage} 
                alt="Comparación antes y después del ranking SEO local mostrando mejora de posición 15 a posición 2" 
                className="w-full h-auto" 
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-4 text-slate-950">
              Posiciona <span className="text-cta">#1 en Google</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              El 75% de los usuarios nunca pasan de la primera página. Nosotros te llevamos al top con estrategias SEO probadas.
            </p>
            
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-cta" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-montserrat text-lg font-bold mb-1 text-slate-950">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              variant="cta"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Mejora tu Posicionamiento Ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankGoogle;
