import { Heart, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Pequeños Abrazos</span>
            </div>
            <p className="text-sm text-background/80">
              Peluches únicos tejidos a mano con amor, creando momentos especiales 
              que perduran en el tiempo.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/pequenosabrazos_cl" className="text-background/80 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:info@pequeñosabrazos.cl" className="text-background/80 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+56912345678" className="text-background/80 hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Productos */}
          <div>
            <h3 className="font-semibold mb-4">Productos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Ositos de Peluche</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Conejitos</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Colecciones</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Pedidos Personalizados</a></li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h3 className="font-semibold mb-4">Información</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#nosotros" className="text-background/80 hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Cuidados</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Envíos</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Política de Cambios</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-background/80">
              {/* <li>Santiago, Chile</li> */}
              <li>info@pequeñosabrazos.cl</li>
              <li>+56 9 6104 0176</li>
              {/* <li>Lun - Vie: 9:00 - 18:00</li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-background/80">
            © 2024 Pequeños Abrazos. Todos los derechos reservados.
          </p>
          <p className="text-sm text-background/80">
          Desarrollado por <a href="https://icomers.cl" className="text-background/80 hover:text-primary transition-colors">iCOMERS</a></p>
          <p className="text-sm text-background/80 mt-2 md:mt-0">
            Hecho con <Heart className="inline h-4 w-4 text-primary" /> en Santo Domingo, Chile
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;