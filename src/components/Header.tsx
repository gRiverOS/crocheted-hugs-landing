import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Pequeños Abrazos</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#productos" className="text-foreground hover:text-primary transition-colors">
              Productos
            </a>
            <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
              Nosotros
            </a>
            <a href="#testimonios" className="text-foreground hover:text-primary transition-colors">
              Testimonios
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Hacer Pedido
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <a
              href="#inicio"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Inicio
            </a>
            <a
              href="#productos"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Productos
            </a>
            <a
              href="#nosotros"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Nosotros
            </a>
            <a
              href="#testimonios"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Testimonios
            </a>
            <a
              href="#contacto"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Contacto
            </a>
            <div className="pt-4">
              <Button variant="default" className="w-full bg-primary hover:bg-primary/90">
                Hacer Pedido
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;