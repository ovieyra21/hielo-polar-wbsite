
import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero section */}
      <section className="relative py-20 bg-ice-700">
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Quiénes Somos</h1>
            <div className="h-1 w-20 bg-white mt-4 mb-8 rounded-full" />
            <p className="text-xl">
              Hielo Polar del Centro es una empresa líder en la producción y distribución 
              de hielo en Guanajuato y Michoacán.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMTVMNDUgNDVNMTUgNDVMNDUgMTUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')]"></div>
      </section>
      
      {/* Main content */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Nuestra Historia" 
                subtitle="Excelencia y calidad garantizada"
              />
              <div className="space-y-6 text-lg">
                <p>
                  Hielo Polar del Centro nació con la misión de ofrecer productos de hielo 
                  de la más alta calidad a negocios y consumidores en Guanajuato y Michoacán. 
                  Con años de experiencia en el sector, nos hemos consolidado como líderes 
                  en la región.
                </p>
                <p>
                  Nos especializamos en la fabricación de barras de hielo industrial y bolsas 
                  de cubos de hielo, garantizando un producto de alta calidad, elaborado con 
                  agua purificada y con un proceso de congelación controlado.
                </p>
                <p>
                  Nuestro compromiso es brindar un servicio eficiente, con entregas puntuales 
                  y productos que cumplen con los estándares más exigentes del mercado.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80" 
                alt="Fabrica de hielo"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-ice-50 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center">
                <span className="text-5xl font-bold text-ice-600">100%</span>
                <span className="text-sm font-medium text-ice-700 mt-2">AGUA PURIFICADA</span>
              </div>
            </div>
          </div>
          
          {/* Values */}
          <div className="mt-32">
            <SectionTitle 
              title="Nuestros Valores" 
              subtitle="Los pilares que guían nuestro trabajo"
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {["Calidad", "Responsabilidad", "Puntualidad", "Compromiso", "Eficiencia", "Atención al cliente"].map((value, index) => (
                <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-ice-500 h-6 w-6" />
                      <h3 className="text-xl font-semibold text-ice-700">{value}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Commitment */}
          <div className="mt-32 bg-ice-50 p-12 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-ice-700 mb-6">Nuestro Compromiso</h2>
              <p className="text-xl">
                En Hielo Polar del Centro estamos comprometidos con la calidad, la seguridad 
                alimentaria y el servicio al cliente. Trabajamos constantemente para mejorar 
                nuestros procesos y ofrecer el mejor producto posible a nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
