
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle 
              title="Quiénes Somos" 
              subtitle="Excelencia en hielo desde hace años"
            />
            <p className="text-lg mb-6">
              Hielo Polar del Centro es una empresa líder en la producción y 
              distribución de hielo en Guanajuato y Michoacán. Nos especializamos 
              en la fabricación de barras de hielo industrial y bolsas de cubos de 
              hielo, garantizando un producto de alta calidad, elaborado con agua 
              purificada y con un proceso de congelación controlado.
            </p>
            <p className="text-lg mb-8">
              Nuestro compromiso es brindar un servicio eficiente, con entregas 
              puntuales y productos que cumplen con los estándares más exigentes 
              del mercado.
            </p>
            <Button asChild className="bg-ice-500 hover:bg-ice-600">
              <Link to="/nosotros">Conoce más sobre nosotros</Link>
            </Button>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80" 
                alt="Fabrica de hielo"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-ice-100 rounded-lg flex items-center justify-center">
              <span className="text-4xl font-bold text-ice-500">15+</span>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-ice-500 rounded-lg flex items-center justify-center">
              <span className="text-4xl font-bold text-white">100%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
