
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20">
      <div className="container">
        <SectionTitle 
          title="Contacto" 
          subtitle="Estamos a tu servicio"
          center
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-ice-700 mb-6">Envíanos un mensaje</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    className="w-full border-ice-200 focus:border-ice-500 focus:ring-ice-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full border-ice-200 focus:border-ice-500 focus:ring-ice-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto
                </label>
                <Input
                  id="subject"
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full border-ice-200 focus:border-ice-500 focus:ring-ice-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="Escribe tu mensaje aquí..."
                  rows={5}
                  className="w-full border-ice-200 focus:border-ice-500 focus:ring-ice-500"
                />
              </div>
              <Button type="submit" className="w-full bg-ice-500 hover:bg-ice-600">
                Enviar mensaje
              </Button>
            </form>
          </div>
          
          {/* Contact information */}
          <div className="space-y-8">
            <div className="bg-ice-50 p-6 rounded-lg border border-ice-100">
              <div className="flex items-start">
                <div className="bg-ice-100 rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-ice-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-ice-700">Teléfono</h4>
                  <p className="text-gray-600">+52 (417) 172-1455</p>
                </div>
              </div>
            </div>
            
            <div className="bg-ice-50 p-6 rounded-lg border border-ice-100">
              <div className="flex items-start">
                <div className="bg-ice-100 rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6 text-ice-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-ice-700">Correo electrónico</h4>
                  <p className="text-gray-600">contacto@hielolapolar.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-ice-50 p-6 rounded-lg border border-ice-100">
              <div className="flex items-start">
                <div className="bg-ice-100 rounded-full p-3 mr-4">
                  <MapPin className="h-6 w-6 text-ice-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-ice-700">Ubicación</h4>
                  <p className="text-gray-600">Guanajuato y Michoacán, México</p>
                </div>
              </div>
            </div>
            
            <div className="bg-ice-50 p-6 rounded-lg border border-ice-100">
              <div className="flex items-start">
                <div className="bg-ice-100 rounded-full p-3 mr-4">
                  <Clock className="h-6 w-6 text-ice-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-ice-700">Horario de atención</h4>
                  <p className="text-gray-600">Lunes a Sábado: 6:00 am - 7:00 pm</p>
                  <p className="text-gray-600">Domingo: 6:00 am - 2:00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
