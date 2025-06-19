
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

const news = [
  {
    id: 1,
    title: "Nueva ruta de distribución en Michoacán",
    date: "15 de octubre, 2023",
    excerpt: "Ampliamos nuestra cobertura con una nueva ruta de distribución que abarcará más municipios de Michoacán.",
    image: "https://images.unsplash.com/photo-1544782383-c3d77461b3d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Nuevos conservadores disponibles",
    date: "3 de septiembre, 2023",
    excerpt: "Hemos adquirido nuevos conservadores para préstamo a nuestros clientes frecuentes en diferentes capacidades.",
    image: "https://images.unsplash.com/photo-1583440664369-2ba3bb7d95be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const NewsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <SectionTitle 
          title="Noticias y Novedades" 
          subtitle="Mantente informado de nuestras novedades"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-ice-500 mb-2">
                  <CalendarDays size={16} className="mr-2" />
                  <span className="text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-ice-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Button variant="outline" className="border-ice-600 text-ice-600 hover:bg-ice-600 hover:text-white">
                  Leer Más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
