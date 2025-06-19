
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Info, Star, Users } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";

const AboutSection = () => {
  return <section className="py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-ice-800 mb-6">Quiénes Somos</h2>
            <div className="w-20 h-1 bg-ice-500 mb-8"></div>
            <p className="text-lg text-gray-700 mb-6">
              Hielo Polar del Centro es una empresa líder en la producción y 
              distribución de hielo en Guanajuato y Michoacán. Nos especializamos 
              en la fabricación de barras de hielo industrial y bolsas de cubos de 
              hielo, garantizando un producto de alta calidad.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Nuestro hielo se elabora con agua purificada y con un proceso de 
              congelación controlado, brindando un servicio eficiente, con entregas 
              puntuales y productos que cumplen con los estándares más exigentes del mercado.
            </p>
            <Button asChild className="bg-ice-600 hover:bg-ice-700 text-white">
              <Link to="/nosotros">Leer Más</Link>
            </Button>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img alt="Fábrica de hielo" className="w-full h-[500px] object-cover" src="/lovable-uploads/d913f418-6570-4c04-871c-cb785496b76f.jpg" />
            </div>
            <div className="absolute top-10 -left-10 w-full h-full border-4 border-ice-500 rounded-lg -z-10"></div>
          </div>
        </div>
        
        {/* Why Choose Us section */}
        <div className="mt-24">
          <SectionTitle 
            title="¿Por Qué Elegirnos?" 
            subtitle="Razones para confiar en Hielo Polar del Centro" 
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-ice-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-ice-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold text-ice-700 mb-2">Servicio 24/7</h3>
              <p className="text-gray-600">
                Estamos disponibles todos los días del año para atender tus necesidades de hielo.
              </p>
            </div>
            
            <div className="bg-ice-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-ice-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold text-ice-700 mb-2">Máxima Calidad</h3>
              <p className="text-gray-600">
                Nuestro hielo cumple con los más altos estándares de calidad y pureza.
              </p>
            </div>
            
            <div className="bg-ice-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-ice-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-ice-700 mb-2">+15 Años de Experiencia</h3>
              <p className="text-gray-600">
                Contamos con amplia experiencia en la producción y distribución de hielo.
              </p>
            </div>
            
            <div className="bg-ice-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-ice-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Info size={32} />
              </div>
              <h3 className="text-xl font-bold text-ice-700 mb-2">Asesoría Personalizada</h3>
              <p className="text-gray-600">
                Te ayudamos a determinar la cantidad exacta de hielo que necesitas para tu evento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
