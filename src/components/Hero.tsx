import { Button } from "@/components/ui/button";
import heroImage from "@/assets/madrid-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Madrid cityscape at sunset" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/30 to-background/20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-4xl">
          <h1 className="font-montserrat text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight">
            AGENCIA SEO MADRID.
            <br />
            <span className="text-foreground">POSICIONAMIENTO QUE CONVIERTE.</span>
          </h1>
          <div className="mt-12">
            <Button variant="cta" size="lg" className="text-lg">
              SOLICITA TU AUDITORÍA GRATIS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
