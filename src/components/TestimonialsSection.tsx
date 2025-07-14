import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    location: 'Santiago',
    rating: 5,
    comment: 'El osito que compré para mi hija es simplemente perfecto. Se nota el amor y dedicación en cada detalle. ¡Altamente recomendado!',
    avatar: '👩‍🦰'
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    location: 'Valparaíso',
    rating: 5,
    comment: 'Excelente calidad y terminación. El conejito que pedí llegó tal como lo esperaba. Sin duda volveré a comprar.',
    avatar: '👨‍💼'
  },
  {
    id: 3,
    name: 'Ana Rodríguez',
    location: 'Concepción',
    rating: 5,
    comment: 'Los peluches son hermosos y súper suaves. Perfectos para regalar. El servicio al cliente también es excelente.',
    avatar: '👩‍💻'
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada testimonio es una historia de amor y felicidad que nos motiva 
            a seguir creando momentos especiales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-soft hover:shadow-glow transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="h-8 w-8 text-primary/30" />
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground italic">
                    "{testimonial.comment}"
                  </p>

                  <div className="flex items-center space-x-3 pt-4 border-t border-border">
                    <div className="text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <Star className="h-5 w-5 fill-primary text-primary" />
            <span className="text-lg font-semibold">4.9/5 estrellas</span>
            <span>basado en 25+ reseñas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;