
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MessageSquare, Calendar, Clock } from "lucide-react";

const Cta = () => {
  return <section className="py-24 bg-ice-700 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMTVMNDUgNDVNMTUgNDVMNDUgMTUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')]"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¡No te quedes sin hielo! Pide hoy mismo.</h2>
            <p className="text-xl mb-6 text-ice-100">
              Ofrecemos precios especiales para mayoristas y entregas a domicilio para bolsas de hielo.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm flex items-start">
                <Phone className="mr-3 text-ice-200 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Contáctanos</h4>
                  <p className="text-ice-100 text-sm">+52 (417) 172-1455</p>
                </div>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm flex items-start">
                <Clock className="mr-3 text-ice-200 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Horario</h4>
                  <p className="text-ice-100 text-sm">Lunes a Domingo</p>
                  <p className="text-ice-100 text-sm">6:00 am - 7:00 pm</p>
                </div>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm flex items-start">
                <Calendar className="mr-3 text-ice-200 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Reserva</h4>
                  <p className="text-ice-100 text-sm">Aparta tu pedido con anticipación</p>
                </div>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm flex items-start">
                <MessageSquare className="mr-3 text-ice-200 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white">WhatsApp</h4>
                  <p className="text-ice-100 text-sm">Atención inmediata</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-ice-700 hover:bg-ice-100 hover:text-ice-800">
                <Link to="/contacto">
                  <MessageSquare className="mr-2" />
                  Contactar ahora
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-ice-700">
                <a href="https://wa.me/524171721455" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Solicita una Cotización</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-ice-100 mb-1 block">Nombre</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/10 border border-ice-300/30 rounded-md text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Tu nombre o empresa"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-ice-100 mb-1 block">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-white/10 border border-ice-300/30 rounded-md text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Tu número de teléfono"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-sm font-medium text-ice-100 mb-1 block">Mensaje</label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full bg-white/10 border border-ice-300/30 rounded-md text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="¿Qué cantidad de hielo necesitas? ¿Para cuándo lo necesitas?"
                ></textarea>
              </div>
              
              <Button className="w-full bg-white text-ice-700 hover:bg-ice-100">
                Enviar Solicitud
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-ice-100 text-center">
          <p>Al contactarnos, aceptas nuestra <Link to="/politica-de-privacidad" className="underline hover:text-white">Política de Privacidad</Link> y entiendes tus derechos de solicitar la eliminación de tus datos.</p>
        </div>
      </div>
    </section>;
};
export default Cta;
