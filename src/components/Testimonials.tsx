import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    text: "Hicimos una estrategia de contenido especializada en posicionamiento orgánico con resultados increíbles. El equipo demostró que el posicionamiento orgánico es la solución.",
    author: "Rosana Cenfreces",
    role: "Director de Marketing",
  },
  {
    text: "Un trabajo excepcional. Su compromiso y dedicación nos ayudó a mejorar nuestro posicionamiento online de manera significativa.",
    author: "Jessica Martín",
    role: "CEO",
  },
  {
    text: "Los resultados superaron nuestras expectativas. Un equipo profesional que realmente entiende las necesidades del mercado español.",
    author: "Benito Morth",
    role: "Gerente General",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-950 mb-4">
            LO QUE DICEN NUESTROS CLIENTES
          </h2>
          <div className="w-24 h-1 bg-cta mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-gray-200">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-cta/20 flex items-center justify-center">
                    <span className="font-montserrat font-bold text-cta text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-gray-950">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg">
            CONÓCENOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
