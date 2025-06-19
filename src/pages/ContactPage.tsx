
import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
const ContactPage = () => {
  return <Layout>
      {/* Hero section */}
      <section className="relative py-20 bg-ice-700">
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
            <div className="h-1 w-20 bg-white mt-4 mb-8 rounded-full" />
            <p className="text-xl">
              Estamos aquí para ayudarte. Contáctanos y te responderemos a la brevedad.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMTVMNDUgNDVNMTUgNDVMNDUgMTUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')]"></div>
      </section>
      
      {/* Main content */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div>
              <SectionTitle title="Envíanos un Mensaje" subtitle="Responderemos a la brevedad" />
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre
                      </label>
                      <Input id="name" placeholder="Tu nombre" className="w-full border-ice-200 focus:border-ice-500 focus:ring-ice-500" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Correo electrónico
                      </label>
                      <Input id="email" type="email" placeholder="tu@email.com" className="w-full border-ice-200 focus:border-ice-500 focus:ring-ice-500" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <Input id="phone" placeholder="Tu número de teléfono" className="w-full border-ice-200 focus:border-ice-500 focus:ring-ice-500" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Asunto
                    </label>
                    <Input id="subject" placeholder="¿En qué podemos ayudarte?" className="w-full border-ice-200 focus:border-ice-500 focus:ring-ice-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje
                    </label>
                    <Textarea id="message" placeholder="Escribe tu mensaje aquí..." rows={5} className="w-full border-ice-200 focus:border-ice-500 focus:ring-ice-500" />
                  </div>
                  <Button type="submit" className="w-full bg-ice-500 hover:bg-ice-600">
                    Enviar mensaje
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact information */}
            <div>
              <SectionTitle title="Información de Contacto" subtitle="Estamos para servirte" />
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-ice-100 rounded-full p-3 mr-4">
                      <Phone className="h-6 w-6 text-ice-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-ice-700 mb-1">Teléfono</h4>
                      <p className="text-gray-600">+52 (417) 172-1455</p>
                      <p className="text-gray-600">
                    </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-ice-100 rounded-full p-3 mr-4">
                      <Mail className="h-6 w-6 text-ice-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-ice-700 mb-1">Correo electrónico</h4>
                      <p className="text-gray-600">contacto@hielolapolar.com</p>
                      <p className="text-gray-600">ventas@hielolapolar.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-ice-100 rounded-full p-3 mr-4">
                      <MapPin className="h-6 w-6 text-ice-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-ice-700 mb-1">Ubicación</h4>
                      <p className="text-gray-600">Prol. Ignacio Zaragoza 615, Col. Rancho Grande. Acámbaro. Gto</p>
                      <div className="mt-4">
                        <h5 className="font-medium text-ice-700 mb-2">Cobertura:</h5>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <p className="font-medium">Guanajuato:</p>
                            <ul className="text-gray-600">
                              <li>Acámbaro</li>
                              <li>Tarandacuao</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium">Michoacán</p>
                            <ul className="text-gray-600">
                              <li>Maravatío</li>
                              <li>Zinapécuaro</li>
                              <li>Santa Ana Maya</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-ice-100 rounded-full p-3 mr-4">
                      <Clock className="h-6 w-6 text-ice-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-ice-700 mb-1">Horario de atención</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <div>
                          <h5 className="font-medium">Venta al público:</h5>
                          <p className="text-gray-600">Lunes a Sábado: 6:00 am - 6:30 pm</p>
                          <p className="text-gray-600">Domingo: 6:00 am - 2:00 pm</p>
                        </div>
                        <div>
                          <h5 className="font-medium">Rutas de reparto:</h5>
                          <p className="text-gray-600">Lunes a Domingo: 8:00 am - 6:00 pm</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="mt-20 bg-ice-50 p-8 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-ice-700 mb-4">¿Listo para hacer un pedido?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Contáctanos hoy mismo para realizar tu pedido o solicitar más información 
                sobre nuestros productos y servicios.
              </p>
              <Button className="bg-ice-500 hover:bg-ice-600">
                <Phone className="mr-2 h-4 w-4" /> Llamar ahora
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default ContactPage;
