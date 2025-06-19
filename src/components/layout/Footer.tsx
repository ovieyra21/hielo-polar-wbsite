import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const Footer = () => {
  return <footer className="bg-ice-800 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            
            <p className="text-ice-100 mb-6">





Empresa líder en la producción y distribución de hielo en Guanajuato y Michoacán, especializada en barras de hielo industrial y bolsas de cubos de hielo.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-ice-700 flex items-center justify-center hover:bg-ice-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-ice-700 flex items-center justify-center hover:bg-ice-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-ice-700 flex items-center justify-center hover:bg-ice-600 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="flex items-center text-ice-100 hover:text-white transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="flex items-center text-ice-100 hover:text-white transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link to="/productos" className="flex items-center text-ice-100 hover:text-white transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="flex items-center text-ice-100 hover:text-white transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="flex items-center text-ice-100 hover:text-white transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidad" className="flex items-center text-ice-100 hover:text-white transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 shrink-0 mt-1 text-ice-400" />
                <span className="text-ice-100">Prol. Ignacio Zaragoza 615, Acámbaro. Gto</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 shrink-0 text-ice-400" />
                <span className="text-ice-100">+52 (417) 172-1455</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 shrink-0 text-ice-400" />
                <span className="text-ice-100">contacto@hielolapolar.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-3 shrink-0 mt-1 text-ice-400" />
                <div className="text-ice-100">
                  <p>Lunes a Sábado: 6:00 am - 7:00 pm</p>
                  <p>Domingo: 6:00 am - 2:00 pm</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Suscríbete</h3>
            <p className="text-ice-100 mb-4">
              Recibe ofertas especiales y noticias directamente en tu correo electrónico.
            </p>
            <form className="space-y-3">
              <input type="email" placeholder="Tu correo electrónico" className="w-full px-4 py-2 bg-ice-700 border border-ice-600 rounded-md text-white placeholder:text-ice-300 focus:outline-none focus:ring-2 focus:ring-ice-500" />
              <Button className="w-full bg-white text-ice-800 hover:bg-ice-100">
                Suscribirse
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-ice-700 py-6">
        <div className="container text-center text-ice-300 text-sm">
          <p>
            © {new Date().getFullYear()} Hielo Polar del Centro. Todos los derechos reservados.
            <Link to="/politica-de-privacidad" className="ml-2 hover:text-white">
              Política de Privacidad
            </Link>
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;