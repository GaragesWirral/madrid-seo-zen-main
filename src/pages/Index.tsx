import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WebsitesConvert from "@/components/WebsitesConvert";
import RankGoogle from "@/components/RankGoogle";
import PaidAds from "@/components/PaidAds";
import AgencyBenefits from "@/components/AgencyBenefits";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-montserrat">
      <Navigation />
      <Hero />
      <Services />
      <WebsitesConvert />
      <RankGoogle />
      <PaidAds />
      <AgencyBenefits />
      <Testimonials />
      <ContactForm />
      <Footer />
      
      {/* JSON-LD Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Madrid SEO Agency",
          "description": "Agencia SEO en Madrid especializada en posicionamiento web, SEO local, link building y consultoría SEO",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Madrid",
            "addressCountry": "ES"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.4168",
            "longitude": "-3.7038"
          },
          "url": "https://www.madrid-seo-agency.com",
          "telephone": "+34915000000",
          "priceRange": "€€",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        })}
      </script>
    </div>
  );
};

export default Index;
