import { Button } from "@/components/ui/button";
import paidAdsImage from "@/assets/paid-ads-results.png";

const PaidAds = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Publicidad <span className="text-cta">de Pago</span> que Funciona
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-6">
              Genera leads cualificados desde el primer día con campañas de Google Ads y Meta Ads optimizadas para máximo ROI.
            </p>
            <ul className="space-y-4 mb-8 text-secondary-foreground">
              <li className="flex items-start gap-3">
                <span className="text-cta text-xl">✓</span>
                <span>Campañas de Google Ads dirigidas a búsquedas de alta intención</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cta text-xl">✓</span>
                <span>Meta Ads (Facebook e Instagram) para alcance masivo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cta text-xl">✓</span>
                <span>Remarketing inteligente para convertir visitantes en clientes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cta text-xl">✓</span>
                <span>Optimización continua basada en datos reales</span>
              </li>
            </ul>
            <Button 
              variant="cta"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Lanza tu Primera Campaña
            </Button>
          </div>
          <div>
            <img 
              src={paidAdsImage} 
              alt="Resultados de publicidad de pago mostrando clientes potenciales y estadísticas de campañas" 
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaidAds;
