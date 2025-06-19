
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import OurProcess from "@/components/home/OurProcess";
import Testimonials from "@/components/home/Testimonials";
import NewsSection from "@/components/home/NewsSection";
import InstagramFeed from "@/components/home/InstagramFeed";
import Cta from "@/components/home/Cta";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { Link } from "react-router-dom";
import { Calculator } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <AboutSection />
      <OurProcess />
      
      {/* Calculadora de Hielo CTA */}
      <section className="py-24 bg-gradient-to-b from-ice-50 to-white">
        <div className="container">
          <SectionTitle 
            title="Calculadora de Hielo" 
            subtitle="¿Cuánto hielo necesitas para tu evento?" 
            center
          />
          
          <div className="max-w-2xl mx-auto mt-8 text-center">
            <p className="text-gray-600 mb-8">
              Utiliza nuestra calculadora especializada para determinar la cantidad exacta 
              de hielo que necesitarás en tu próximo evento. Evita quedarte corto o desperdiciar 
              producto con nuestra herramienta de cálculo precisa.
            </p>
            
            <Button asChild className="bg-ice-600 hover:bg-ice-700 text-white px-8 py-6 text-lg">
              <Link to="/calculadora" className="flex items-center">
                <Calculator className="mr-2" />
                Usar Calculadora de Hielo
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <NewsSection />
      <InstagramFeed />
      <Cta />
    </Layout>
  );
};

export default Index;
