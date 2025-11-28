import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const services = [
    { name: "Diseño Web", href: "/diseno-web" },
    { name: "Posicionamiento SEO", href: "/posicionamiento-seo" },
    { name: "Mantenimiento Web", href: "/mantenimiento-web" },
    { name: "Google Ads", href: "/google-ads" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-2 h-6 bg-cta rounded-sm"></div>
              <div className="w-2 h-6 bg-primary rounded-sm"></div>
              <div className="w-2 h-6 bg-accent rounded-sm"></div>
            </div>
            <div className="font-montserrat">
              <div className="text-xl font-bold leading-tight text-foreground">MADRID</div>
              <div className="text-xs font-semibold text-muted-foreground tracking-wider">SEO AGENCY</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              AGENCIA SEO MADRID
            </a>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
                SERVICIOS
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 text-sm font-medium text-gray-900 hover:bg-cta/10 hover:text-cta transition-colors"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              BLOG
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              CONTACTO
            </a>
            <Button 
              variant="cta" 
              size="sm" 
              className="text-sm py-2 px-6"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              SOLICITA TU AUDITORÍA GRATIS
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              HOME
            </a>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button 
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 w-full"
              >
                SERVICIOS
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileServicesOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="text-sm text-foreground hover:text-primary transition-colors py-1"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              BLOG
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              CONTACTO
            </a>
            <Button 
              variant="cta" 
              size="sm" 
              className="text-sm"
              onClick={() => {
                setIsMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              SOLICITA TU AUDITORÍA GRATIS
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
