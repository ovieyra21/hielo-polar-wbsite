
import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Package, Package2, Info, Calculator } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const ProductsPage = () => {
  const handleDownload = (productName: string) => {
    // Mostrar una notificación toast informando que las fichas técnicas estarán disponibles pronto
    toast.info(`La ficha técnica de ${productName} estará disponible próximamente`, {
      description: "Estamos actualizando nuestras fichas técnicas. ¡Gracias por su paciencia!",
      duration: 5000,
    });
  };

  return (
    <Layout>
      {/* Hero section */}
      <section className="relative py-20 bg-ice-700">
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Productos</h1>
            <div className="h-1 w-20 bg-white mt-4 mb-8 rounded-full" />
            <p className="text-xl">
              Descubre nuestra variedad de productos de hielo, elaborados con 
              agua purificada y con los más altos estándares de calidad.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMTVMNDUgNDVNMTUgNDVMNDUgMTUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')]"></div>
      </section>
      
      {/* Main content */}
      <section className="py-20">
        <div className="container">
          <SectionTitle 
            title="Nuestros Productos" 
            subtitle="Calidad garantizada en cada pieza de hielo"
            center
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Industrial Ice */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-ice-100">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src="/lovable-uploads/Hielo-Polar-Barra-Azul.jpg" 
                  alt="Barras de hielo industrial"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ice-900/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Barras de Hielo Industrial</h3>
                    <p>La solución perfecta para negocios y eventos</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center space-x-2">
                  <Package2 className="h-6 w-6 text-ice-600" />
                  <h4 className="text-lg font-semibold text-ice-700">Especificaciones</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-ice-100 flex items-center justify-center text-ice-600 text-sm mr-2 shrink-0">1</span>
                    <span><strong>Peso:</strong> 75 kg.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-ice-100 flex items-center justify-center text-ice-600 text-sm mr-2 shrink-0">2</span>
                    <span><strong>Uso:</strong> Ideal para negocios, restaurantes, pescaderías y eventos.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-ice-100 flex items-center justify-center text-ice-600 text-sm mr-2 shrink-0">3</span>
                    <span><strong>Servicio de molido:</strong> Sin costo adicional para moler las barras según la necesidad del cliente.</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button 
                    className="w-full bg-ice-500 hover:bg-ice-600 flex items-center justify-center"
                    onClick={() => handleDownload("Barras de Hielo Industrial")}
                  >
                    <FileText size={16} className="mr-1" />
                    Descargar Ficha Técnica
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Cubed Ice */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-ice-100">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img src="/lovable-uploads/Hielo-Polar-Bolsa-5kg.jpg" 
                  alt="Cubos de hielo"
                  className="w-full h-64 object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-ice-900/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Cubos de Hielo</h3>
                    <p>Perfectos para todas tus bebidas y eventos</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center space-x-2">
                  <Package className="h-6 w-6 text-ice-600" />
                  <h4 className="text-lg font-semibold text-ice-700">Variedades</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-ice-100 flex items-center justify-center text-ice-600 text-sm mr-2 shrink-0">1</span>
                    <span><strong>Hielo Premier:</strong> Cubos de hielo, cristalinos, ideales para tus bebidas.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-ice-100 flex items-center justify-center text-ice-600 text-sm mr-2 shrink-0">2</span>
                    <span><strong>Cubitos Tradicionales:</strong> Perfectos para consumo diario y cualquier evento.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-ice-100 flex items-center justify-center text-ice-600 text-sm mr-2 shrink-0">3</span>
                    <span><strong>Presentación:</strong> Bolsa de 5 kg.</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button 
                    className="w-full bg-ice-500 hover:bg-ice-600 flex items-center justify-center"
                    onClick={() => handleDownload("Cubos de Hielo")}
                  >
                    <FileText size={16} className="mr-1" />
                    Descargar Ficha Técnica
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Calculator CTA Section */}
          <div className="mt-20 bg-ice-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-ice-700 mb-4">¿Cuánto hielo necesitas?</h3>
                <p className="text-gray-700 mb-6">
                  Utiliza nuestra calculadora especializada para determinar la cantidad exacta 
                  de hielo que necesitarás en tu próximo evento. Evita quedarte corto o 
                  desperdiciar producto con nuestra herramienta de cálculo.
                </p>
                <Button asChild className="bg-ice-500 hover:bg-ice-600 flex items-center">
                  <Link to="/calculadora">
                    <Calculator size={18} className="mr-2" />
                    Usar Calculadora de Hielo
                  </Link>
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-ice-100 rounded-full text-ice-600 mb-4">
                    <Calculator size={32} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Planifica tu evento</h4>
                  <p className="text-gray-600 mb-4">
                    Diferentes eventos requieren distintas cantidades de hielo. Conoce 
                    exactamente cuánto necesitarás para tu ocasión especial.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quality Guarantee */}
          <div className="mt-20 bg-ice-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-ice-700 mb-4">Garantía de Calidad</h3>
                <p className="text-gray-700 mb-4">
                  En Hielo Polar, nos esforzamos por mantener los más altos estándares 
                  de calidad en cada uno de nuestros productos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-ice-500 mr-2"></div>
                    <span>Agua 100% purificada</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-ice-500 mr-2"></div>
                    <span>Proceso de congelación controlado</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-ice-500 mr-2"></div>
                    <span>Almacenamiento higiénico</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-ice-500 mr-2"></div>
                    <span>Distribución estratégica</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-ice-100 rounded-full text-ice-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Solicita más información</h4>
                  <p className="text-gray-600 mb-4">
                    Si quieres ser nuestro socio comercial.
                  </p>
                  <Button asChild className="bg-ice-500 hover:bg-ice-600">
                    <Link to="/contacto">Contactar ahora</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
