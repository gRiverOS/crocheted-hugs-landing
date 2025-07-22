import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star } from 'lucide-react';
import teddyBear from '@/assets/teddy-bear.jpg';
import bunny from '@/assets/bunny.jpg';
import collection from '@/assets/collection.jpg';
import princess from '@/assets/princess.jpg';
import gatita from '@/assets/gatita.jpg';
import zorritoRojo from '@/assets/zorrito rojo.jpg';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

// Importar todas las imágenes del directorio assets
import molly from '@/assets/crocheted-molly-la-vaquita.jpg';
import flynn from '../assets/crocheted-flynn-el-zorrito.jpg';
import rocco from '../assets/crocheted-rocco-el-capibara.jpg';
import sophie from '../assets/crocheted-sophie-la-ratoncita.jpg';
import gaspar from '../assets/crocheted-gaspar-el-ganso.jpg';
import millie from '../assets/crocheted-millie-la-gatita.jpg';
import nina from '../assets/crocheted-nina-la-hipopotamo.jpg';
import paco from '../assets/crocheted-paco-el-pato.jpg';
import spike from '../assets/crocheted-spike-el-triceratops.jpg';
import willy from '../assets/crocheted-willy-el-pinguino.jpg';
import gigi from '../assets/crocheted-gigi-la-jirafa.jpg';
import fito from '../assets/crocheted-fito-el-perrito.jpg';
import octavio from '../assets/crocheted-octavio-el-pulpo.jpg';
import bruno from '../assets/crocheted-bruno-el-osito.jpg';


// Si no existe, crea el archivo src/assets/images.d.ts con:
// declare module '*.JPG';
// declare module '*.jpeg';
// declare module '*.jpg';
// declare module '*.png';
// declare module '*.gif';
// declare module '*.webp';
// declare module '*.svg';

const products = [
  {
    id: 1,
    name: 'Molly La Vaquita',
    price: '$25.000',
    image: molly,
    rating: 4,
    category: 'Peluche',
    description: 'Amigurumi tejido a mano, ideal para regalar o coleccionar.',
    popular: false,
  },
  {
    id: 2,
    name: 'Flynn El Zorrito',
    price: '$12.000',
    image: flynn,
    rating: 5,
    category: 'Peluche',
    description: 'Amigurumi tejido a mano, ideal para regalar o coleccionar.',
    popular: false,
  },
  {
    id: 3,
    name: 'Rocco El Capibara',
    price: '$20.000',
    image: rocco,
    rating: 5,
    category: 'Peluche',
    description: 'Amigurumi tejido a mano, ideal para regalar o coleccionar.',
    popular: false,
  },
  {
    id: 4,
    name: 'Sophie La Ratoncita',
    price: '$12.000',
    image: sophie,
    rating: 3,
    category: 'Peluche',
    description: 'Amigurumi tejido a mano, ideal para regalar o coleccionar.',
    popular: false,
  },
  {
    id: 5,
    name: 'Gaspar El Ganso',
    price: '$20.000',
    image: gaspar,
    rating: 5,
    category: 'Peluche',
    description: 'Amigurumi tejido a mano, ideal para regalar o coleccionar.',
    popular: false,
  },
  {
    id: 6,
    name: 'Millie La Gatita',
    price: '$25.000',
    image: millie,
    rating: 5,
    category: 'Peluche',
    description: 'Amigurumi tejido a mano, ideal para regalar o coleccionar.',
    popular: false,
  },
  {
    id: 7,
    name: 'Nina la hipopotamo',
    price: '$20.000',
    image: nina,
    rating: 5,
    category: 'Peluche',
    description: 'Amigurumi tejido a mano, ideal para regalar o coleccionar.',
    popular: false,
  },
  {
    id: 8,
    name: 'Paco El Pato',
    price: '$20.000',
    image: paco,
    rating: 5,
    category: 'Peluche',
    description: 'Amigurumi tejido a mano, ideal para regalar o coleccionar.',
    popular: false,
  },
  {
    id: 9,
    name: 'Spike El Triceratops',
    price: '$25.000',
    image: spike,
    rating: 5,
    category: 'Peluche',
    description: 'Amigurumi tejido a mano, ideal para regalar o coleccionar.',
    popular: false,
  },
  {
    id: 10,
    name: 'Wlly El Pinguino',
    price: '$20.000',
    image: willy,
    rating: 5,
    category: 'Peluche',
    description: 'Amigurumi tejido a mano, ideal para regalar o coleccionar.',
    popular: false,
  },
  {
    id: 11,
    name: 'Gigi La Jirafa',
    price: '$20.000',
    image: gigi,
    rating: 5,
    category: 'Peluche',
    description: 'Amigurumi tejido a mano, ideal para regalar o coleccionar.',
    popular: false,
  },
  {
    id: 12,
    name: 'Fito El Perrito',
    price: '$20.000',
    image: fito,
    rating: 5,
    category: 'Peluche',
    description: 'Amigurumi tejido a mano, ideal para regalar o coleccionar.',
    popular: false,
  },
  {
    id: 13,
    name: 'Octavio El Pulpo',
    price: '$20.000',
    image: octavio,
    rating: 5,
    category: 'Peluche',
    description: 'Amigurumi tejido a mano, ideal para regalar o coleccionar.',
    popular: false,
  },
  {
    id: 14,
    name: 'Bruno el osito',
    price: '$12.000',
    image: bruno,
    rating: 5,
    category: 'Peluche',
    description: 'Amigurumi tejido a mano, ideal para regalar o coleccionar.',
    popular: false,
  },
];

const ProductsSection = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
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

        {/* <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => {
              const galeria = document.getElementById('galeria-productos');
              if (galeria) {
                galeria.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Ver Todos los Productos
          </Button>
        </div> */}

        <div
          id="galeria-productos"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-glow transition-all duration-300 bg-card text-card-foreground rounded-lg overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden cursor-pointer" onClick={() => setLightbox({ src: product.image, alt: product.name })}>
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
              </CardContent>
            </Card>
          ))}
        </div>

        {showAlert && (
          <div className="mt-8 flex justify-center">
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded shadow max-w-md w-full text-center">
              <strong>¡Próximamente!</strong> Estamos trabajando para mostrarte todos los productos.
            </div>
          </div>
        )}

        {/* Lightbox Modal */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <div
              className="relative max-w-2xl w-full mx-4"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
                onClick={() => setLightbox(null)}
                aria-label="Cerrar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full h-auto rounded-lg shadow-lg border-4 border-white"
              />
              <div className="text-center text-white mt-4 text-lg font-semibold drop-shadow">
                {lightbox.alt}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;