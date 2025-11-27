import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <a href="#posicionamiento" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              POSICIONAMIENTO
            </a>
            <a href="#blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              BLOG
            </a>
            <a href="#contacto" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              CONTACTO
            </a>
            <Button variant="cta" size="sm" className="text-sm py-2 px-6">
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
            <a href="#posicionamiento" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              POSICIONAMIENTO
            </a>
            <a href="#blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              BLOG
            </a>
            <a href="#contacto" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              CONTACTO
            </a>
            <Button variant="cta" size="sm" className="text-sm">
              SOLICITA TU AUDITORÍA GRATIS
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
