import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                <div className="w-2 h-6 bg-cta rounded-sm"></div>
                <div className="w-2 h-6 bg-primary rounded-sm"></div>
                <div className="w-2 h-6 bg-accent rounded-sm"></div>
              </div>
              <div className="font-montserrat">
                <div className="text-xl font-bold leading-tight text-footer-foreground">MADRID</div>
                <div className="text-xs font-semibold text-footer-foreground/70 tracking-wider">SEO AGENCY</div>
              </div>
            </div>
            <p className="text-footer-foreground/80 mb-4 max-w-md">
              Somos una agencia especializada en posicionamiento web y marketing digital con resultados garantizados para tu negocio.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat text-xl font-bold text-footer-foreground mb-4">CONTACTO</h3>
            <div className="space-y-3">
              <a href="tel:+34915000000" className="flex items-center gap-3 text-footer-foreground/80 hover:text-cta transition-colors">
                <Phone className="w-5 h-5" />
                <span>+34 (91) 500 0000</span>
              </a>
              <a href="tel:+34915000000" className="flex items-center gap-3 text-footer-foreground/80 hover:text-cta transition-colors">
                <Phone className="w-5 h-5" />
                <span>+34 (91) 500 0000</span>
              </a>
              <a href="mailto:hello@madridagency.es" className="flex items-center gap-3 text-footer-foreground/80 hover:text-cta transition-colors">
                <Mail className="w-5 h-5" />
                <span>hello@madridagency.es</span>
              </a>
              <a href="https://www.madrid-agency.es" className="flex items-center gap-3 text-footer-foreground/80 hover:text-cta transition-colors">
                <Globe className="w-5 h-5" />
                <span>https://www.madrid-agency.es</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-cta flex items-center justify-center hover:bg-cta/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-cta-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-cta flex items-center justify-center hover:bg-cta/80 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-cta-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-cta flex items-center justify-center hover:bg-cta/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-cta-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-cta flex items-center justify-center hover:bg-cta/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-cta-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-footer-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-footer-foreground/70 text-sm">
              © 2024 Madrid SEO Agency. All rights reserved.
            </p>
            <a 
              href="#" 
              className="text-footer-foreground/70 hover:text-cta transition-colors text-sm"
            >
              / Linkedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
