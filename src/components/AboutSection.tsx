import { Card, CardContent } from '@/components/ui/card';
import { Heart, Scissors, Palette, Award } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Hecho con Amor',
    description: 'Cada puntada es tejida con dedicación y cariño para crear compañeros únicos y especiales.'
  },
  {
    icon: Scissors,
    title: 'Técnicas Artesanales',
    description: 'Utilizamos técnicas tradicionales de crochet y knitting para garantizar la máxima calidad.'
  },
  {
    icon: Palette,
    title: 'Colores Únicos',
    description: 'Seleccionamos cuidadosamente cada hilo para crear combinaciones de colores armoniosas.'
  },
  {
    icon: Award,
    title: 'Calidad Premium',
    description: 'Materiales de primera calidad que garantizan durabilidad y suavidad en cada peluche.'
  }
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Pequeños Abrazos nació de la pasión por crear momentos especiales 
                  a través del arte del tejido. Cada peluche que creamos lleva consigo 
                  horas de dedicación y amor.
                </p>
                <p>
                  Utilizamos técnicas tradicionales de crochet y knitting, combinadas 
                  con diseños modernos y colores cuidadosamente seleccionados para crear 
                  compañeros únicos que perduren en el tiempo.
                </p>
                <p>
                  Nuestro compromiso es brindar no solo un producto de calidad, sino 
                  también una experiencia llena de calidez y ternura que conecte corazones 
                  y cree recuerdos inolvidables.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">2 años</div>
                <div className="text-sm text-muted-foreground">De experiencia</div>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-soft bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;