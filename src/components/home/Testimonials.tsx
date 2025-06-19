import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, StarHalf, StarOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Restaurant La Marina",
    role: "Cliente Mayorista",
    content: "Llevamos 5 años trabajando con Hielo Polar del Centro y el servicio siempre ha sido excepcional. El hielo es de excelente calidad y las entregas siempre son puntuales.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    name: "Grupo Eventos MX",
    role: "Organizador de Eventos",
    content: "Para nuestros eventos siempre requerimos grandes cantidades de hielo. Hielo Polar del Centro siempre nos ha brindado un servicio eficiente y productos de calidad.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    name: "Pescadería El Marlín",
    role: "Cliente Frecuente",
    content: "El préstamo de conservadores ha sido una gran ventaja para nuestro negocio. Gracias a Hielo Polar del Centro podemos mantener nuestros productos frescos.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
];

const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={16} className="text-ice-500 fill-ice-500" />
      ))}
      {hasHalfStar && <StarHalf size={16} className="text-ice-500 fill-ice-500" />}
      {[...Array(emptyStars)].map((_, i) => (
        <StarOff key={`empty-${i}`} size={16} className="text-gray-300" />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-ice-50">
      <div className="container">
        <SectionTitle 
          title="Lo Que Dicen Nuestros Clientes" 
          subtitle="Testimonios de quienes ya confían en nosotros"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <Quote className="text-ice-500" size={32} />
                  <RatingStars rating={testimonial.rating} />
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  {testimonial.image ? (
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-ice-100 rounded-full flex items-center justify-center text-ice-700 font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-ice-800">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mt-12 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-ice-700 mb-4">¿Eres cliente de Hielo Polar?</h3>
          <p className="text-gray-600 mb-4">
            Nos encantaría conocer tu experiencia con nuestros productos y servicios.
          </p>
          <Button asChild className="bg-ice-600 hover:bg-ice-700 text-white">
            <Link to="/contacto">Compartir tu Experiencia</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
