import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Hero = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video background with overlay */}
      <div className="absolute inset-0 w-full h-full bg-ice-900">
        {/* Fallback image if video fails to load */}
        {videoError && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1500820242045-8a794ef5fd55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            }}
          />
        )}
        
        {/* Video element */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
          onError={() => {
            console.error("Error loading video");
            setVideoError(true);
          }}
        >
          <source src="/hielo-polar.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Content */}
      <div className="container relative h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            HIELO POLAR DEL CENTRO
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Líderes en producción y distribución de hielo de la más alta calidad
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-white text-ice-700 hover:bg-ice-100 hover:text-ice-800 border-2 border-white"
            >
              <Link to="/productos">
                Nuestros Productos
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-ice-700"
            >
              <Link to="/nosotros">
                Conócenos
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center">
          <svg 
            className="w-6 h-6 text-ice-700" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;