import { MapPin, Link2, CheckCircle, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const services = [{
  icon: MapPin,
  title: "SEO Local",
  description: "Secretos del SEO"
}, {
  icon: Link2,
  title: "Link Building",
  description: "Posicionamiento y espacios"
}, {
  icon: CheckCircle,
  title: "Auditoría SEO",
  description: "Beneme Auditoría SEO"
}, {
  icon: MessageSquare,
  title: "Consultoría",
  description: "Consultoría Consultorio"
}];
const Services = () => {
  return <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-4 text-gray-950">
            LO QUE HACEMOS
          </h2>
          <div className="w-24 h-1 bg-cta mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-10 h-10 text-cta" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="font-montserrat text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Services;