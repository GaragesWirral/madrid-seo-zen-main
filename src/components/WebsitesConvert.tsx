import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import conversionChart from "@/assets/conversion-chart.png";

const WebsitesConvert = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Sitios Web que <span className="text-cta">Convierten</span>
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-6">
              No basta con tener un sitio web bonito. Necesitas una máquina de generación de leads que convierta visitantes en clientes.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-cta" strokeWidth={3} />
                </div>
                <span className="text-secondary-foreground">Diseño optimizado para conversión y experiencia de usuario</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-cta" strokeWidth={3} />
                </div>
                <span className="text-secondary-foreground">Velocidad de carga ultrarrápida para mejor SEO</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-cta" strokeWidth={3} />
                </div>
                <span className="text-secondary-foreground">Formularios optimizados que generan más leads</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-cta" strokeWidth={3} />
                </div>
                <span className="text-secondary-foreground">Diseño responsive perfecto en todos los dispositivos</span>
              </li>
            </ul>
            <Button variant="cta">Solicita tu Consulta Gratuita</Button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-cta/20 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={conversionChart} 
                alt="Gráfico de conversiones mostrando aumento en clientes potenciales"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsitesConvert;
