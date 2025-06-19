
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Users, Clock } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Venta y Distribución",
    description: "Ofrecemos venta al público y distribución mayorista para satisfacer todas sus necesidades de hielo.",
    icon: Users,
  },
  {
    id: 2,
    title: "Entrega a Domicilio",
    description: "Disponible para bolsas de hielo en diferentes presentaciones. Servicio eficiente y puntual.",
    icon: Truck,
  },
  {
    id: 3,
    title: "Préstamo de Conservadores",
    description: "Para clientes frecuentes, ofrecemos conservadores de 20, 40, 60 y 100 bolsas de 5 kg.",
    icon: Clock,
  }
];

const Services = () => {
  return (
    <section className="py-20">
      <div className="container">
        <SectionTitle 
          title="Nuestros Servicios" 
          subtitle="Calidad y eficiencia garantizada"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="text-center bg-white border-ice-100 shadow hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-ice-100 flex items-center justify-center text-ice-600">
                  <service.icon size={32} />
                </div>
                <CardTitle className="text-xl text-ice-700">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
