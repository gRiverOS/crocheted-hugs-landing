import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star } from 'lucide-react';
import teddyBear from '@/assets/teddy-bear.jpg';
import bunny from '@/assets/bunny.jpg';
import collection from '@/assets/collection.jpg';

const products = [
  {
    id: 1,
    name: 'Osito de Peluche Rosado',
    price: '$25.000',
    image: teddyBear,
    rating: 5,
    category: 'Ositos',
    description: 'Adorable osito tejido en colores pastel, perfecto para abrazar.',
    popular: true,
  },
  {
    id: 2,
    name: 'Conejito Verde Menta',
    price: '$20.000',
    image: bunny,
    rating: 5,
    category: 'Conejitos',
    description: 'Tierno conejito con orejas largas y suave textura.',
    popular: false,
  },
  {
    id: 3,
    name: 'Colección Animalitos',
    price: '$45.000',
    image: collection,
    rating: 5,
    category: 'Sets',
    description: 'Set de 3 animalitos: elefante, gato y búho.',
    popular: true,
  },
];

const ProductsSection = () => {
  return (
    <section id="productos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros Peluches
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada peluche es único y especial, tejido con amor y dedicación usando 
            las mejores técnicas de crochet y knitting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.popular && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Más Popular
                    </Badge>
                  )}
                  <button className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {product.price}
                      </span>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Añadir al Carrito
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Ver Todos los Productos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;