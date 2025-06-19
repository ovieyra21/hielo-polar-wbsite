
import { SectionTitle } from "@/components/ui/section-title";
import { MapPin } from "lucide-react";

const locations = [
  {
    state: "Guanajuato",
    cities: ["Acámbaro", "Tarandacuao"],
  },
  {
    state: "Michoacán",
    cities: ["Maravatío", "Zinapécuaro", "Santa Ana Maya"],
  }
];

const Coverage = () => {
  return (
    <section className="py-20 bg-ice-800 text-white">
      <div className="container">
        <SectionTitle 
          title="Cobertura y Rutas de Entrega" 
          subtitle="Presentes en los siguientes municipios"
          center
          className="text-white"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <div 
              key={index} 
              className="bg-ice-700/50 p-6 rounded-lg border border-ice-600"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <MapPin className="mr-2" />
                {location.state}
              </h3>
              <ul className="space-y-2">
                {location.cities.map((city, cityIndex) => (
                  <li key={cityIndex} className="flex items-center text-ice-100">
                    <span className="w-2 h-2 rounded-full bg-ice-400 mr-2"></span>
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center bg-ice-700/30 p-8 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Horarios de Reparto</h3>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-ice-300">Venta en Sucursales</h4>
              <p className="text-ice-100">Lunes a Sábado: 6:00 am - 7:00 pm</p>
              <p className="text-ice-100">Domingo: 6:00 am - 2:00 pm</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-ice-300">Rutas de Reparto</h4>
              <p className="text-ice-100">Lunes a Sábado: 8:00 am - 6:00 pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
